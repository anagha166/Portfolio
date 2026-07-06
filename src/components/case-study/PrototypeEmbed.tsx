interface PrototypeEmbedProps {
  url: string
  title?: string
}

export function PrototypeEmbed({ url, title = 'Interactive prototype' }: PrototypeEmbedProps) {
  return (
    <div className="my-10">
      <div className="aspect-[16/10] w-full overflow-hidden rounded-sm border border-[var(--color-beige)] shadow-[0_2px_20px_rgba(0,0,0,0.06)] dark:border-[var(--color-beige-dark)] dark:shadow-[0_2px_20px_rgba(0,0,0,0.3)]">
        <iframe
          src={url}
          title={title}
          className="h-full w-full border-0"
          loading="lazy"
          allowFullScreen
        />
      </div>
      <p className="mt-3 text-center text-sm text-[var(--color-graphite-faint)] dark:text-[var(--color-graphite-faint-dark)]">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-[var(--color-accent)] dark:hover:text-[var(--color-accent-dark)]"
        >
          Open prototype in new tab →
        </a>
      </p>
    </div>
  )
}
