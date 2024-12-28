
import { Seo } from "@/ui/components/seo";
import { Button } from "@/ui/design-system/button/button";
//import { Typography } from "@/ui/design-system/typography/typography";

//déclaration icone
import { RiBattery2ChargeFill, RiBattery2ChargeLine } from "react-icons/ri";

export default function Home() {
  return ( <>
        <Seo title="Pozkawa" description="blablabla"/>



        <RiBattery2ChargeFill/>
        <RiBattery2ChargeLine/>

        <div className="flex items-center gap-4 p-10">
          <Button size="small">Clique ici</Button>

          <Button size="small" icon={{icon: RiBattery2ChargeFill}}>Clique ici</Button>
          <Button size="small" icon={{icon: RiBattery2ChargeFill}} iconPosition="left">Clique ici</Button>

          <Button size="small" variant="secondary">Clique ici</Button>
          <Button size="small" variant="outline">Clique ici</Button>
          <Button size="small"variant="disabled" disabled>Clique ici</Button>
          <Button variant="ico" icon={{icon: RiBattery2ChargeFill}} ></Button>

        </div>

        <div className="flex items-center gap-4 p-10">
          <Button>Clique ici</Button>
          <Button variant="secondary">Clique ici</Button>
          <Button variant="outline">Clique ici</Button>
          <Button variant="disabled" disabled>Clique ici</Button>

          <Button variant="ico" icon={{icon: RiBattery2ChargeFill}} ></Button>
        
        </div>

        <div className="flex items-center gap-4 p-10">
          <Button size="large">Clique ici</Button>
          <Button size="large" variant="secondary">Clique ici</Button>
          <Button size="large" variant="outline">Clique ici</Button>
          <Button size="large" variant="disabled" disabled>Clique ici</Button>

          <Button size="large" variant="ico" icon={{icon: RiBattery2ChargeFill}} ></Button>
          <Button size="large" variant="ico" icon={{icon: RiBattery2ChargeFill}}  iconTheme="secondary" ></Button>
          <Button size="large" variant="ico" icon={{icon: RiBattery2ChargeFill}}  iconTheme="gray"></Button>
          

        </div>


    {/*<div className="space-y-5">

      <Typography variant ="h1"  component="div">Blabla Blahblahhh</Typography>
      <Typography theme = "black" variant ="h2"  component="div">Blabla Blahblahhh</Typography>
      <Typography theme = "primary" variant ="h3"  component="div">Blabla Blahblahhh</Typography>
      <Typography theme = "secondary" variant ="h4"  component="div">OKKKKK</Typography>
      <Typography variant ="h5"  component="div">Blabla Blahblahhh</Typography>
      <Typography variant ="body1"  component="div">Blabla Blahblahhh</Typography>
      <Typography variant ="body2"  component="div">Blabla Blahblahhh</Typography> 
    </div>*/}
    </>
  );
}