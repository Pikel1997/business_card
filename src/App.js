import Card from "./components/Card";
import {UserInputWrap, Input, Textarea, Label, Button} from './styled/UserInputSection'
import {HeadingStyled} from './styled/Headings'
import {useState} from 'react'
import html2canvas from 'html2canvas'

function App() {

  const [name, setName] = useState();
  const [occupation, setOccupation] = useState();
  const [website, setWebsite] = useState();
  const [email, setEmail] = useState();
  const [about, setAbout] = useState();
  const [services, setServices] = useState();
  const [image, setImage] = useState();
  const [P_col, setPcol] = useState();
  const [S_col, setScol] = useState();

  console.log(document.querySelector("#image"))
  if(document.querySelector("#image") !== null){
    if(document.querySelector("#image").files.length === 1){
      document.querySelector("#upload_label").innerHTML = "Uploaded Successfully";
    }
  }

  function download(){
    html2canvas(document.querySelector("#card"), {
      allowTaint: true,
      backgroundColor: "rgba(255,255,255,0)",
      scrollX: -window.scrollX,
      scrollY: -window.scrollY,
      windowWidth: document.documentElement.offsetWidth,
      windowHeight: document.documentElement.offsetHeight,
      scale: 10
    }).then((canvas) => {
      console.log(document.documentElement.offsetHeight, window.scrollX, window.scrollY)
      let link = document.createElement("a");
      link.className = "download-link";
      link.setAttribute("download", "business_card");
      link.setAttribute("href", canvas.toDataURL('image/png'));
      link.style = "display: none;"
      document.body.appendChild(link);
      link.click();
    })
  }

  return (
    <>
      <UserInputWrap>
        <HeadingStyled style={{fontSize: '2rem'}}>Business Card Generator</HeadingStyled>
        <Label htmlFor="image" id="upload_label">Upload Profile Pic</Label>
        <Input type="file" onChange={(e) => {setImage(e.target.files[0])}} id="image" placeholder="Upload an image" required />
        <Input type="text" onChange={(e) => {setName(e.target.value)}} value={name} id="name" placeholder="Your name?" required autoComplete="off" />
        <Input type="text" onChange={(e) => {setOccupation(e.target.value)}} value={occupation} id="occupation" placeholder="Profession" required autoComplete="off" />
        <Input type="text" onChange={(e) => {setWebsite(e.target.value)}} value={website} id="website" placeholder="Website" required autoComplete="off" />
        <Input type="email" onChange={(e) => {setEmail(e.target.value)}} value={email} id="email" placeholder="Email" required autoComplete="off" />
        <Textarea type="text" onChange={(e) => {setAbout(e.target.value)}} value={about} id="about" placeholder="A little bit about you.." rows="5" required autoComplete="off" />
        <Textarea type="text" onChange={(e) => {setServices(e.target.value)}} value={services} id="interests" placeholder="Services offered..." rows="5" required autoComplete="off" />
        <p>Themes</p>
        <Input type="color" onChange={(e) => {setPcol(e.target.value)}} value={P_col} />
        <Input type="color" onChange={(e) => {setScol(e.target.value)}} value={S_col} />
        <Button onClick={() => {download()}}>Download</Button>
      </UserInputWrap>
      <Card name={name} occupation={occupation} website={website} email={email} linkedin about={about} services={services} github twitter instagram P_col={P_col} S_col={S_col} image_src={URL.createObjectURL(new Blob([image], {type: "image"}))} />
    </>
  );
}

export default App;
