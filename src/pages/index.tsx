
import { Seo } from "@/ui/components/seo";
import { Typography } from "@/ui/design-system/typography/typography";

export default function Home() {
  return ( <>
        <Seo title="Pozkawa" description="blablabla"/>
    <div className="space-y-5">

      <Typography variant ="h1"  component="div">Blabla Blahblahhh</Typography>
      <Typography theme = "black" variant ="h2"  component="div">Blabla Blahblahhh</Typography>
      <Typography theme = "primary" variant ="h3"  component="div">Blabla Blahblahhh</Typography>
      <Typography theme = "secondary" variant ="h4"  component="div">OKKKKK</Typography>
      <Typography variant ="h5"  component="div">Blabla Blahblahhh</Typography>
      <Typography variant ="body1"  component="div">Blabla Blahblahhh</Typography>
      <Typography variant ="body2"  component="div">Blabla Blahblahhh</Typography>
    </div>
    </>
  );
}