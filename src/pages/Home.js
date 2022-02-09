import React, { useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import * as ROUTES from '../constants/routes';
import { Link } from 'react-router-dom';
import { useHeader } from '../context/headerContext';
import { useAuth } from '../context/authContext';

export default function Home() {
  const { currentUser, logOut, isLoading } = useAuth();
  const { setCustomHeader } = useHeader();

  useEffect(() => {
    const customHeader = currentUser ? (
      <div className="lg:mr-2 flex justify-around items-center space-x-1">
        <button
          onClick={() => logOut()}
          className="px-4 py-2 text-rose-400 font-nunito font-bold rounded-3xl bg-gray-50"
        >
          Log Out
        </button>
        <Link
          to={ROUTES.ADMIN}
          className="px-4 py-2 text-white font-nunito font-bold rounded-3xl bg-rose-400"
        >
          Admin
        </Link>
      </div>
    ) : (
      <div className="mr-2 flex justify-around items-center space-x-1">
        <Link
          to={ROUTES.LOGIN}
          className="px-4 py-2 text-rose-400 font-nunito font-bold rounded-3xl bg-gray-100"
        >
          Log In
        </Link>
        <Link
          to={ROUTES.REGISTER}
          className="px-4 py-2 text-white font-nunito font-bold rounded-3xl bg-rose-400"
        >
          Sign Up
        </Link>
      </div>
    );

    setCustomHeader(customHeader);
  }, [currentUser, logOut, setCustomHeader]);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="w-full">
      <Header />
      <section className="w-full p-4 flex flex-col justify-around lg:flex-row font-nunito">
        <div className="flex flex-col items-center">
          <h2 className="mt-4 text-2xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-400 to-blue-400">
            The only link you'll ever need
          </h2>
          <h3 className="w-5/6 my-2 mb-4 text-center text-sm text-gray-700 lg:text-xl lg:w-auto">
            Use it to connect audiences to all of your content with just one
            link
          </h3>
          <div className="lg:h-screen flex flex-col-reverse lg:flex-col">
            <div className="flex flex-col justify-center items-center space-y-4">
              <Link
                to={ROUTES.REGISTER}
                className="py-4 px-8 text-center text-xl text-white font-nunito font-extrabold rounded-3xl bg-rose-400"
              >
                Get Started for free
              </Link>
              <Link
                to={ROUTES.LOGIN}
                className="mt-6 text-lg text-gray-700 font-nunito font-semibold hover:underline"
              >
                Already on Linkpile? Log In
              </Link>
            </div>
            <img
              src="/mockup1.png"
              className="w-full h-full object-cover"
            ></img>
          </div>
        </div>
      </section>
      <section className="w-full p-4 flex flex-col justify-around items-center space-y-8 lg:flex-row">
        <img src="/mockup2.png"></img>
        <div className="flex flex-col justify-center space-y-8">
          <h1 className="text-3xl font-nunito font-bold">Link to everywhere</h1>
          <p className="max-w-lg text-xl text-gray-700 font-inter font-semibold">
            Linktree is the launchpad to your latest video, article, recipe,
            tour, store, website, social post - everywhere you are online.
          </p>
        </div>
      </section>
      <section className="w-full p-4 flex flex-col justify-around items-center space-y-8 lg:flex-row-reverse">
        <img src="/mockup3.png" />
        <div className="flex flex-col justify-center space-y-8">
          <h1 className="text-3xl font-nunito font-bold">Easily managed</h1>
          <p className="max-w-lg text-xl text-gray-700 font-inter font-semibold">
            Creating a Linktree takes seconds. Use our simple drag-and-drop
            editor to effortlessly manage your content.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
