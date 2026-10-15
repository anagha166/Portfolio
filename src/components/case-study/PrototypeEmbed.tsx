interface PrototypeEmbedProps {
  url: string
  title?: string
}

export function PrototypeEmbed({ url, title = 'Interactive prototype' }: PrototypeEmbedProps) {
  return (
    <div className="my-12">
      <div className="aspect-[16/10] w-full overflow-hidden border border-black/10">
        <iframe
          src={url}
          title={title}
          className="h-full w-full border-0"
          loading="lazy"
          allowFullScreen
        />
      </div>
      <p className="mt-3 text-sm text-black/45">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-black/20 underline-offset-4 transition-colors hover:text-black hover:decoration-black/50"
        >
          Open prototype in a new tab
        </a>
      </p>
    </div>
  )
}
