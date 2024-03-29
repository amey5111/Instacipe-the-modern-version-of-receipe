import Head from "next/head";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Pageheading from "../components/Pageheading";
import ff1 from "../public/ff1.jpg";
import ff2 from "../public/ff2.jpg";
import ff3 from "../public/ff3.jpg";
import ff4 from "../public/ff4.jpg";
import ff5 from "../public/ff5.jpg";
export default function instasearch() {
  return (
    <div>
      <Head>
        <title>Instacipe | food facts</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        ></link>
        <link rel="icon" href="/instalogo.png" />
        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
          integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"
          crossOrigin="anonymous"
          async
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
          integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
          crossOrigin="anonymous"
          async
        ></script>
      </Head>
      <Navbar />
      <Pageheading title="Amazing Food Facts" />
      <div className="flex flex-row my-5">
        <Image src={ff1} alt="food fact here " className="w-1/4" height={355} />
        <span className="text-lg font-semibold border-3 border-gray-600 rounded-xl bg-purple-300 w-1/2 h-fit p-3 mx-2 my-auto">
          <h5 className="text-center text-2xl font-bold">potatoes</h5>
          The humble potatoes contains almost all the nutrients necessary for
          survival
        </span>
      </div>

      <div className="flex flex-row my-5">
        <span className="text-lg font-semibold border-3 border-gray-600 rounded-xl bg-blue-300 w-1/2 h-fit p-3 mx-2 my-auto">
          <h5 className="text-center text-2xl font-bold">Ratatouille</h5>
          The word Ratatouille originates from french word touiller which means
          toss food
        </span>
        <Image src={ff2} alt="food fact here " className="w-1/4" height={355} />
      </div>

      <div className="flex flex-row my-5">
        <Image src={ff3} alt="food fact here " className="w-1/4" height={355} />
        <span className="text-lg font-semibold border-3 border-gray-600 rounded-xl bg-pink-300 w-1/2 h-fit p-3 mx-2 my-auto">
          <h5 className="text-center text-2xl font-bold">Grapes</h5>
          Grapes are full of antioxidents and excellent source of vitamins C and
          K
        </span>
      </div>

      <div className="flex flex-row my-5">
        <span className="text-lg font-semibold border-3 border-gray-600 rounded-xl bg-orange-300 w-1/2 h-fit p-3 mx-2 my-auto">
          <h5 className="text-center text-2xl font-bold">Yogurt</h5>
          Yogurt contains good bacteria called as active culturs which helps to
          regulate food digesion
        </span>
        <Image src={ff4} alt="food fact here " className="w-1/4" height={355} />
      </div>

      <div className="flex flex-row my-5">
        <Image src={ff5} alt="food fact here " className="w-1/4" height={355} />
        <span className="text-lg font-semibold border-3 border-gray-600 rounded-xl bg-violet-300 w-1/2 h-fit p-3 mx-2 my-auto">
          <h5 className="text-center text-2xl font-bold">Pears</h5>
          In encient Greece pears are used as a natural remedy against nausea
        </span>
      </div>
    </div>
  );
}
