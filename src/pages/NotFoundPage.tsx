import Button from "../components/Button";
import PageIntro from "../components/PageIntro";

export default function NotFoundPage() {
  return <><PageIntro title="This page has wandered off." description="Let's get you back to somewhere comfortable. Explore our rooms or start again from the home page." /><div className="flex flex-wrap gap-4 px-[7%] pb-24 sm:px-[6%]"><Button href="/">Back home</Button><Button href="/rooms">Explore rooms</Button></div></>;
}



