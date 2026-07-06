interface VideoEmbedProps {
  url: string
  title?: string
}

export function VideoEmbed({ url, title = 'Project video' }: VideoEmbedProps) {
  return (
    <div className="my-10 aspect-video w-full overflow-hidden rounded-sm shadow-[0_2px_20px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_20px_rgba(0,0,0,0.3)]">
      <iframe
        src={url}
        title={title}
        className="h-full w-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>
  )
}
