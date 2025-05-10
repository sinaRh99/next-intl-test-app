import { ReactNode } from "react";

type Tag = "p" | "b" | "i" | "br";

type Props = {
  children: (
    tags: Record<Tag, (chunks: ReactNode) => ReactNode>
  ) => React.ReactNode;
};

export const RichText = ({ children }: Props) => {
  return (
    <div className="prose">
      {children({
        p: (chunks) => <p className="text-teal-600">{chunks}</p>,
        b: (chunks) => (
          <b className="font-bold text-fuchsia-600 text-lg">{chunks}</b>
        ),
        i: (chunks) => <i className="italic text-sky-500">{chunks}</i>,
        br: () => <br />,
      })}
    </div>
  );
};
