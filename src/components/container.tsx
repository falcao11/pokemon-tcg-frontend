export default function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="p-10">{children}</div>;
}
