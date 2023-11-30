'use client'

import Switch from '@/app/components/Switch'
import { useEffect, useRef, useState } from 'react'

interface Props {
  title: string
  content: string
  description: string
  published: boolean
  createdAt: Date
  action: (formData: FormData) => Promise<void>
  deletable?: boolean
}

export default function PostEditor({
  title,
  content,
  description,
  published,
  createdAt,
  action,
  deletable,
}: Props) {
  const formRef = useRef<HTMLFormElement>(null)

  const [editedPublished, setEditedPublished] = useState(published)

  const [canSubmit, setCanSubmit] = useState(true)

  useEffect(() => {
    const handleControlSave = (e: KeyboardEvent) => {
      if (e.key === 's' && (e.ctrlKey || e.metaKey) && canSubmit) {
        e.preventDefault()
        formRef.current?.dispatchEvent(
          new Event('submit', { cancelable: true, bubbles: true })
        )

        setCanSubmit(false)

        setTimeout(() => {
          setCanSubmit(true)
        }, 500)
      }
    }

    window.addEventListener('keydown', handleControlSave)

    return () => {
      window.removeEventListener('keydown', handleControlSave)
    }
  }, [canSubmit])

  return (
    <form action={action} className="space-y-4" ref={formRef}>
      <div className="flex justify-between items-center">
        <p className="text-xs md:text-sm text-gray-500">
          {createdAt.toLocaleDateString()}
        </p>
        <div className="flex items-center space-x-2">
          <button
            type="submit"
            className="bg-rose-100 text-zinc-900 px-4 py-2 rounded-md hover:bg-rose-200 font-semibold"
          >
            Save
          </button>
          {deletable && (
            <button
              type="submit"
              name="delete"
              value="true"
              className="bg-rose-100 text-zinc-900 px-4 py-2 rounded-md hover:bg-rose-200 font-semibold"
            >
              Delete
            </button>
          )}
        </div>
      </div>
      <input
        type="text"
        name="title"
        defaultValue={title}
        className="border-b-2 border-gray-300 bg-transparent pb-2 w-full outline-none focus:border-blue-500 text-3xl"
        placeholder="Title"
      />
      <div className="flex justify-between items-center">
        <label htmlFor="published">
          {editedPublished ? 'Published' : 'Draft'}
        </label>
        <Switch
          checked={editedPublished}
          onChange={checked => setEditedPublished(checked)}
        />
        <input type="hidden" name="published" value={String(editedPublished)} />
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          defaultValue={description}
          placeholder="Description"
          className="border-b-2 border-gray-300 bg-transparent pb-2 w-full outline-none focus:border-blue-500 text-lg h-18 overflow-y-auto resize-none"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="content">Content</label>
        <textarea
          name="content"
          id="content"
          defaultValue={content}
          placeholder="Content"
          className="border-b-2 border-gray-300 bg-transparent pb-2 w-full outline-none focus:border-blue-500 text-lg h-96 overflow-y-auto resize-none"
        />
      </div>
    </form>
  )
}
