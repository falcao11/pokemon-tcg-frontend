export default function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="py-10 px-80">{children}</div>;
}
