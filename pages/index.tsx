import Container from "../components/container";
import Image from "next/image";

function HomePage() {
  return (
    <>
      <Container>
        <div className="space-y-1 max-w-7xl m-auto mobile">
          {/* <h1 className="text-2xl font-bold code-text">
           print("profile loading .. .. . 404 error")
          </h1> */}
          {/* <div className="image">
            <Image
              src="/gaurav.png"
              width={1920}
              height={1080}
              alt="Header Photo"
            />
          </div> */}
          <p>
            Hello there, 
            <br/><br/>
            I'm Gaurav, a high school senior originally from the
            Himalayas, now calling vibrant New Delhi my home. I enjoy
            programming, exploring, and learning about random things. 
            <br/><br/>
            I'm on a mission to make the world a better place to live. Feel free to drop
            me a line at <a className="pink" href="mailto:hi@pandeygaurav.com">hi@pandeygaurav.com</a>
            <br/><br/>
            Best,
            <Image
            src="/signature.png"
            width={170}
            height={1080}
            alt="Signature"
          />
          </p>
        </div>
      </Container>
    </>
  );
}

export default HomePage;
