import Image from "next/image";

export default function Avatar() {
  return (
    <section className="text-center">
      <Image
        className="rounded-full mx-auto"
        src="/images/profile_nhb.png"
        alt="profile"
        width={200}
        height={200}
      />
      <h2 className="text-3xl font-bold mt-2">안녕하세요 저는 노형빈입니다</h2>
      <h3 className="text-xl font-semibold">풀스택 개발자</h3>
      <p>코딩하길 좋아하는 사람</p>
      <button className="bg-yellow-400 py-1 px-4 rounded-xl font-bold mt-2">
        Contact me
      </button>
    </section>
  );
}
