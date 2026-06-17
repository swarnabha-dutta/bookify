"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Image as ImageIcon, Upload, X } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import LoadingOverlay from "@/components/LoadingOverlay"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { cn } from "@/lib/utils"

const MAX_PDF_SIZE = 50 * 1024 * 1024

const voiceGroups = [
  {
    label: "Male Voices",
    voices: [
      {
        value: "dave",
        name: "Dave",
        description: "Young male, British-Essex, casual & conversational",
      },
      {
        value: "daniel",
        name: "Daniel",
        description: "Middle-aged male, British, authoritative but warm",
      },
      {
        value: "chris",
        name: "Chris",
        description: "Male, casual & easy-going",
      },
    ],
  },
  {
    label: "Female Voices",
    voices: [
      {
        value: "rachel",
        name: "Rachel",
        description: "Young female, American, calm & clear",
      },
      {
        value: "sarah",
        name: "Sarah",
        description: "Young female, American, soft & approachable",
      },
    ],
  },
] as const

const voiceValues = voiceGroups.flatMap((group) =>
  group.voices.map((voice) => voice.value)
) as [string, ...string[]]

const isFile = (value: unknown): value is File =>
  typeof File !== "undefined" && value instanceof File

const uploadFormSchema = z.object({
  pdfFile: z
    .any()
    .refine(isFile, { message: "Please upload a PDF file." })
    .refine((file) => !isFile(file) || file.type === "application/pdf", {
      message: "Only PDF files are accepted.",
    })
    .refine((file) => !isFile(file) || file.size <= MAX_PDF_SIZE, {
      message: "PDF file must be 50MB or smaller.",
    }),
  coverImage: z
    .any()
    .optional()
    .refine((file) => file == null || isFile(file), {
      message: "Please choose a valid image file.",
    })
    .refine((file) => file == null || !isFile(file) || file.type.startsWith("image/"), {
      message: "Cover image must be an image file.",
    }),
  title: z.string().trim().min(1, "Please enter the book title."),
  author: z.string().trim().min(1, "Please enter the author name."),
  voice: z.enum(voiceValues, {
    error: "Please choose an assistant voice.",
  }),
})

type UploadFormValues = z.infer<typeof uploadFormSchema>
type DropzoneKind = "pdf" | "cover" | null

type FileDropzoneProps = {
  icon: React.ReactNode
  text: string
  hint: string
  file?: File
  onOpen: () => void
  onRemove: (event: React.MouseEvent<HTMLButtonElement>) => void
  onDrop: (event: React.DragEvent<HTMLDivElement>) => void
  onDragStateChange: (active: boolean) => void
  isDragActive: boolean
}

function FileDropzone({
  icon,
  text,
  hint,
  file,
  onOpen,
  onRemove,
  onDrop,
  onDragStateChange,
  isDragActive,
}: FileDropzoneProps) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onOpen}
      onDrop={onDrop}
      onDragOver={(event) => {
        event.preventDefault()
        onDragStateChange(true)
      }}
      onDragEnter={(event) => {
        event.preventDefault()
        onDragStateChange(true)
      }}
      onDragLeave={(event) => {
        event.preventDefault()
        onDragStateChange(false)
      }}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault()
          onOpen()
        }
      }}
      className={cn(
        "upload-dropzone border-2 border-dashed border-[#d4c5ae] px-6 text-center",
        file && "upload-dropzone-uploaded",
        isDragActive && "border-[#663820] bg-[#f7f1e5]"
      )}
    >
      {file ? (
        <div className="flex w-full items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3 text-left">
            <div className="upload-dropzone-icon mb-0 flex items-center justify-center">
              {icon}
            </div>
            <div className="min-w-0">
              <p className="upload-dropzone-text truncate">{file.name}</p>
              <p className="upload-dropzone-hint">Click to replace this file</p>
            </div>
          </div>
          <button
            type="button"
            className="upload-dropzone-remove shrink-0"
            onClick={onRemove}
            aria-label={`Remove ${file.name}`}
          >
            <X className="size-5" />
          </button>
        </div>
      ) : (
        <>
          <div className="upload-dropzone-icon flex items-center justify-center">
            {icon}
          </div>
          <p className="upload-dropzone-text">{text}</p>
          <p className="upload-dropzone-hint">{hint}</p>
        </>
      )}
    </div>
  )
}

const UploadForm = () => {
  const pdfInputRef = React.useRef<HTMLInputElement | null>(null)
  const coverInputRef = React.useRef<HTMLInputElement | null>(null)
  const [activeDropzone, setActiveDropzone] = React.useState<DropzoneKind>(null)

  const form = useForm<UploadFormValues>({
    resolver: zodResolver(uploadFormSchema),
    defaultValues: {
      pdfFile: undefined,
      coverImage: undefined,
      title: "",
      author: "",
      voice: "rachel",
    },
  })

  const handleFileSelection = (
    name: "pdfFile" | "coverImage",
    file?: File
  ) => {
    form.setValue(name, file, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    })
  }

  const handleDrop =
    (name: "pdfFile" | "coverImage") => (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault()
      setActiveDropzone(null)
      const file = event.dataTransfer.files?.[0]
      handleFileSelection(name, file)
    }

  const clearFile =
    (
      name: "pdfFile" | "coverImage",
      inputRef: React.RefObject<HTMLInputElement | null>
    ) =>
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()
      event.stopPropagation()
      handleFileSelection(name, undefined)
      if (inputRef.current) {
        inputRef.current.value = ""
      }
    }

  const onSubmit = async (values: UploadFormValues) => {
    const formData = new FormData()
    formData.append("pdfFile", values.pdfFile)
    if (values.coverImage) {
      formData.append("coverImage", values.coverImage)
    }
    formData.append("title", values.title)
    formData.append("author", values.author)
    formData.append("voice", values.voice)

    await new Promise((resolve) => window.setTimeout(resolve, 1400))
    void formData
  }

  return (
    <>
      {form.formState.isSubmitting ? <LoadingOverlay /> : null}

      <div className="new-book-wrapper">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8"
            noValidate
          >
            <FormField
              control={form.control}
              name="pdfFile"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Book PDF File</FormLabel>
                  <FormControl>
                    <input
                      ref={(node) => {
                        pdfInputRef.current = node
                        field.ref(node)
                      }}
                      type="file"
                      accept="application/pdf"
                      className="sr-only"
                      onBlur={field.onBlur}
                      onChange={(event) => {
                        const file = event.target.files?.[0]
                        field.onChange(file)
                      }}
                    />
                  </FormControl>
                  <FileDropzone
                    icon={<Upload className="size-10 stroke-[1.75]" />}
                    text="Click to upload PDF"
                    hint="PDF file (max 50MB)"
                    file={field.value}
                    onOpen={() => pdfInputRef.current?.click()}
                    onRemove={clearFile("pdfFile", pdfInputRef)}
                    onDrop={handleDrop("pdfFile")}
                    onDragStateChange={(active) =>
                      setActiveDropzone(active ? "pdf" : null)
                    }
                    isDragActive={activeDropzone === "pdf"}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="coverImage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cover Image (Optional)</FormLabel>
                  <FormControl>
                    <input
                      ref={(node) => {
                        coverInputRef.current = node
                        field.ref(node)
                      }}
                      type="file"
                      accept="image/*"
                      className="sr-only"
                      onBlur={field.onBlur}
                      onChange={(event) => {
                        const file = event.target.files?.[0]
                        field.onChange(file)
                      }}
                    />
                  </FormControl>
                  <FileDropzone
                    icon={<ImageIcon className="size-10 stroke-[1.75]" />}
                    text="Click to upload cover image"
                    hint="Leave empty to auto-generate from PDF"
                    file={field.value}
                    onOpen={() => coverInputRef.current?.click()}
                    onRemove={clearFile("coverImage", coverInputRef)}
                    onDrop={handleDrop("coverImage")}
                    onDragStateChange={(active) =>
                      setActiveDropzone(active ? "cover" : null)
                    }
                    isDragActive={activeDropzone === "cover"}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <input
                      {...field}
                      className="form-input"
                      placeholder="ex: Rich Dad Poor Dad"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="author"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Author Name</FormLabel>
                  <FormControl>
                    <input
                      {...field}
                      className="form-input"
                      placeholder="ex: Robert Kiyosaki"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="voice"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Choose Assistant Voice</FormLabel>
                  <FormControl>
                    <fieldset className="space-y-5">
                      {voiceGroups.map((group) => (
                        <div key={group.label} className="space-y-3">
                          <p className="text-base font-medium text-[#6c6256]">
                            {group.label}
                          </p>
                          <div
                            className={cn(
                              "voice-selector-options grid grid-cols-1",
                              group.voices.length === 3
                                ? "md:grid-cols-3"
                                : "md:grid-cols-2"
                            )}
                          >
                            {group.voices.map((voice) => {
                              const selected = field.value === voice.value

                              return (
                                <label
                                  key={voice.value}
                                  className={cn(
                                    "voice-selector-option justify-start rounded-xl bg-white text-left",
                                    selected
                                      ? "voice-selector-option-selected"
                                      : "voice-selector-option-default"
                                  )}
                                >
                                  <input
                                    type="radio"
                                    name={field.name}
                                    value={voice.value}
                                    checked={selected}
                                    onChange={() => field.onChange(voice.value)}
                                    onBlur={field.onBlur}
                                    className="sr-only"
                                  />
                                  <span
                                    aria-hidden="true"
                                    className={cn(
                                      "mt-1 size-4 shrink-0 rounded-full border border-[#b8aa93]",
                                      selected && "border-[5px] border-[#663820]"
                                    )}
                                  />
                                  <span className="space-y-1">
                                    <span className="block text-lg font-semibold text-[#4d4439]">
                                      {voice.name}
                                    </span>
                                    <span className="block text-sm leading-5 text-[#7c7266]">
                                      {voice.description}
                                    </span>
                                  </span>
                                </label>
                              )
                            })}
                          </div>
                        </div>
                      ))}
                    </fieldset>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <button
              type="submit"
              className="form-btn disabled:cursor-not-allowed disabled:opacity-80"
              disabled={form.formState.isSubmitting}
            >
              Begin Synthesis
            </button>
          </form>
        </Form>
      </div>
    </>
  )
}

export default UploadForm
