import Link from "next/link";

export default function Page({ params: { lng } }: { params: { lng: string } }) {
  return (
    <>
      <h1>Hi from second page!</h1>
      <Link href={`/${lng}`}>back</Link>
    </>
  );
}
