import cx from "classnames";

interface Props {
  className?: string;
  selectedIcons: string[];
  variant: string;
}

export default function DownloadButton({
  className,
  selectedIcons,
  variant,
}: Props): JSX.Element {
  const handleDownload = async () => {
    const queryString =
      selectedIcons
        .map(
          (name) =>
            `name=${encodeURIComponent(name.replace("Icon", "").toLocaleUpperCase())}`,
        )
        .join("&") + `&variant=${encodeURIComponent(variant)}`;
    const response = await fetch(`/api/get-svgs?${queryString}`);

    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    const contentDisposition = response.headers.get("Content-Disposition");
    const filename = contentDisposition
      ? contentDisposition.split("filename=")[1]
      : selectedIcons.length === 1
        ? `${selectedIcons[0]}.svg`
        : "token-icons.zip";
    link.download = filename ? filename.replace(/['"]/g, "") : ""; // Remove quotes from filename if present
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <button
      type="button"
      onClick={handleDownload}
      className={cx(
        className,
        "flex gap-2 px-4 py-2 font-mono text-sm text-white duration-150 hover:bg-mirage",
      )}
    >
      <span>download</span>
      <span>({selectedIcons.length.toString()})</span>
    </button>
  );
}