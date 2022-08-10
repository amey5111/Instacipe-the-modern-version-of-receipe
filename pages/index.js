import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Dyk from "../components/Dyk";
import Front_Image from "../components/Front_Image";
import Image from "next/image";
import food_tasting from "../public/food_taste_explore.png";
import food_creating from "../public/chef_imoji.png";
import Instacipelogo from "../public/instalogo.png";
export default function Home() {
  return (
    <div className=" bg-cyan-100">
      <Head>
        <title>Instacipe- modified instant version of recipe</title>
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
      {/* ---------------------------------------------ofcanvas starts  ------------------------------------------? */}
      <div
        className="offcanvas offcanvas-start bg-gray-300"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5
            className="offcanvas-title bg-yellow-500 border-2 border-pink-500  rounded px-5 py-2 w-auto"
            id="offcanvasExampleLabel"
          >
            Explore your faviourite dishes with these interesting Catagories
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div>
            <ul>
              <li className="mt-3 px-3 py-2 bg-pink-500 border-3 border-yellow-200 rounded-lg flex w-48 align-middle text-lg text-purple-800 font-semibold">
                <a href="#">Indian dishes</a>
              </li>
              <li className="mt-3 px-3 py-2 bg-pink-500 border-3 border-yellow-200 rounded-lg flex w-48 align-middle text-lg text-purple-800 font-semibold">
                <a href="#">Italian dishes</a>
              </li>
              <li className="mt-3 px-3 py-2 bg-pink-500 border-3 border-yellow-200 rounded-lg flex w-48 align-middle text-lg text-purple-800 font-semibold">
                <a href="#">Mexican dishes</a>
              </li>
              <li className="mt-3 px-3 py-2 bg-pink-500 border-3 border-yellow-200 rounded-lg flex w-48 align-middle text-lg text-purple-800 font-semibold">
                <a href="#">japnese dishes</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Dyk />
      <Front_Image />
      <hr className="bg-blue-900" />
      <div className="mx-3 border-2 border-yellow-200 rounded-xl px-3 py-1 bg-purple-300 mt-3">
        <a className="text-blue-500 text-3xl font-bold px-5" href="#">
          See more such Amazing Food Facts...
        </a>
      </div>
      <div className=" flex flex-row border-b-4 border-t-4 border-yellow-200 bg-cyan-300 mt-5 mb-1">
        <div className="text-5xl font-extrabold my-3 text-purple-500 bg-yellow-100 pl-5 border-4 border-purple-600">
          What&apos;s <div className=" text-6xl my-1">INSTACIPE</div>
          <div className="text-3xl font-semibold text-black -ml-5 bg-cyan-300">
            <div className="ml-10 mt-2">
              Basically Its Modified Instant Version Of Recipe
            </div>
            <div className="pl-10">
              More precisely the rceipe which can be instantly prepared and
              nutricious as well
            </div>
          </div>
        </div>
        <Image src={Instacipelogo} alt="" height={250} width={250} />
      </div>
      <div className="flex flex-col">
        <div className="w-full border-b-4 border-t-4 border-yellow-200 bg-purple-300">
          <h3 className="px-3 py-1 font-bold text-5xl bg-orange-300">
            Want to Explore tasty Instacipes
          </h3>
          <div className="flex flex-row">
            <div className=" ml-10 mr-40">
              <p className="w-fit my-3 text-2xl font-semibold">
                Want to just explore and enjoy different INSTACIPIES
              </p>
              <p className="w-fit my-3 text-2xl font-semibold">
                You got the right place
              </p>
              <p className="w-fit my-3 text-2xl font-semibold">
                Just go ahead and hit the button bellow
              </p>
              <p className="w-fit">
                <button
                  className="btn bg-orange-300 my-3 text-xl font-bold"
                  type="button"
                >
                  Explore Instacipes
                </button>
              </p>
            </div>
            <div>
              <Image src={food_tasting} alt="" height={250} width={250} />
            </div>
          </div>
        </div>
        <div className="w-full border-b-4 border-t-4 border-yellow-200 bg-purple-300">
          <h3 className="px-3 py-1 font-bold text-5xl bg-blue-300">
            Want to SHARE your Instacipes
          </h3>
          <div className="flex flex-row-reverse">
            <div className=" ml-40 mr-10 text-right">
              <p className="w-fit my-3 text-2xl font-semibold">
                Have your own receipes which you fill are instant and nutricious
              </p>
              <p className="w-fit my-3 text-2xl font-semibold">
                Don&apos;nt keep this INSTACIPIES with you shre them with
                everyone
              </p>
              <p className="w-fit my-3 text-2xl font-semibold">
                Just go ahead and hit the button bellow
              </p>
              <p className="w-fit">
                <button
                  className="btn bg-blue-300 my-3 text-xl font-bold"
                  type="button"
                >
                  Add Instacipes
                </button>
              </p>
            </div>
            <div>
              <Image src={food_creating} alt="" height={250} width={250} />
            </div>
          </div>
        </div>
      </div>
      {/* footer starts here --------------------------------------------------------------- */}
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mt-4 border-top bg-black">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="#"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <svg className="bi" width="30" height="24">
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </a>
          <span className="text-muted">© 2021 Company, Inc</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-muted" href="#">
              <svg className="bi" width="24" height="24">
                <use xlinkHref="#twitter"></use>
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="#">
              <svg className="bi" width="24" height="24">
                <use xlinkHref="#instagram"></use>
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="#">
              <svg className="bi" width="24" height="24">
                <use xlinkHref="#facebook"></use>
              </svg>
            </a>
          </li>
        </ul>
      </footer>
      {/* footer ends here --------------------------------------------------------------- */}
    </div>
  );
}
