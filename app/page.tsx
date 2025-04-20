import Blog from "./blog/page";
import Mission from "./mission/page";
import Tag from "./tag/page";

export default function Home() {
  return (
    <>
      {/* <Banner /> */}
      <Mission />
      <Blog />
      <Tag />
    </>
  );
}
