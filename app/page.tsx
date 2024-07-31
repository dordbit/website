import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-neutral-800 bg-gradient-to-b from-zinc-800 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:p-4 lg:dark:bg-zinc-800/30">
          Proqramlaşdırma və məhsuldarlıq təlimatları
        </p>
        <div className="fixed bottom-0 left-0 flex w-full items-end justify-center lg:static lg:size-auto lg:bg-none border-b border-neutral-800 bg-gradient-to-b from-transparent to-zinc-800 pb-1 pt-1 backdrop-blur-2xl">
          <a
            className="flex place-items-center gap-2 p-2 lg:p-0 opacity-70 hover:opacity-100"
            href="https://hallaji.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/hallaji.svg"
              alt="hallaji.com"
              width={24}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-transparent before:to-purple-700 before:opacity-10 before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-900 after:via-[#675e73] after:opacity-40 after:blur-2xl after:content-[''] sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          src="/logo.svg"
          alt="4bit Logo"
          width={300}
          height={341}
          priority
        />
      </div>

      <div className="mb-4 grid text-center sm:grid-cols-1 md:grid-cols-2 lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left gap-3">
        <a
          href="https://youtube.com/@dordbit"
          className="group rounded-lg border border-neutral-700 px-5 py-4 transition-colors hover:border-custom-orange hover:bg-custom-orange/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 className="text-1xl font-semibold transition-transform group-hover:translate-x-1 motion-reduce:transform-none text-left flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="36"
              height="36"
            >
              <path
                d="M20.606,17.96c-0.051,0.19-0.206,0.346-0.398,0.397C19.302,18.599,15.242,18.75,12,18.75c-3.241,0-7.301-0.15-8.21-0.394c-0.19-0.051-0.346-0.206-0.397-0.398C3.123,16.948,3,13.865,3,12c0-1.866,0.123-4.948,0.394-5.96C3.445,5.85,3.6,5.695,3.792,5.643C4.698,5.401,8.758,5.25,12,5.25c3.242,0,7.302,0.151,8.21,0.394c0.19,0.051,0.346,0.206,0.397,0.398C20.877,7.052,21,10.135,21,12C21,13.865,20.877,16.948,20.606,17.96z"
                fill="white"
                opacity=".3"
              />
              <path
                d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418c-0.861,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.861,0.908,1.538,1.768,1.768C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.86-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M19.65,17.297c-0.045,0.169-0.184,0.307-0.354,0.353C18.491,17.866,14.882,18,12,18c-2.881,0-6.49-0.134-7.297-0.35c-0.169-0.045-0.307-0.184-0.353-0.354C4.109,16.398,4,13.658,4,12c0-1.658,0.109-4.398,0.35-5.298C4.395,6.534,4.534,6.395,4.704,6.35C5.509,6.134,9.118,6,12,6c2.882,0,6.491,0.134,7.297,0.35c0.169,0.045,0.307,0.184,0.353,0.354C19.891,7.602,20,10.342,20,12C20,13.658,19.891,16.398,19.65,17.297z"
                fill="white"
              />
              <path d="M10 15.464L10 8.536 16 12z" fill="white" />
            </svg>{" "}
            &nbsp; YouTube -&gt;
          </h3>
        </a>

        <a
          href="https://instagram.com/dordbit"
          className="group rounded-lg border border-neutral-700 px-5 py-4 transition-colors hover:border-custom-orange hover:bg-custom-orange/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 className="text-1xl font-semibold transition-transform group-hover:translate-x-1 motion-reduce:transform-none text-left flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="36"
              height="36"
            >
              <path
                d="M16,4H8C5.791,4,4,5.791,4,8v8c0,2.209,1.791,4,4,4h8c2.209,0,4-1.791,4-4V8C20,5.791,18.209,4,16,4z M12,16c-2.209,0-4-1.791-4-4c0-2.209,1.791-4,4-4s4,1.791,4,4C16,14.209,14.209,16,12,16z"
                fill="white"
                opacity=".3"
              />
              <path
                d="M16,3H8C5.243,3,3,5.243,3,8v8c0,2.757,2.243,5,5,5h8c2.757,0,5-2.243,5-5V8C21,5.243,18.757,3,16,3z M19,16c0,1.654-1.346,3-3,3H8c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3h8c1.654,0,3,1.346,3,3V16z"
                fill="white"
              />
              <path
                d="M12 7c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5S14.757 7 12 7zM12 15c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 15 12 15zM17 6A1 1 0 1 0 17 8 1 1 0 1 0 17 6z"
                fill="white"
              />
            </svg>{" "}
            &nbsp; Instagram -&gt;
          </h3>
        </a>

        <a
          href="https://t.me/dordbit"
          className="group rounded-lg border border-neutral-700 px-5 py-4 transition-colors hover:border-custom-orange hover:bg-custom-orange/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 className="text-1xl font-semibold transition-transform group-hover:translate-x-1 motion-reduce:transform-none text-left flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="36"
              height="36"
            >
              <path
                d="M3 11L21 4 18 20 13 17 9.875 18.5 8 14z"
                fill="white"
                opacity=".3"
              />
              <path
                d="M21.45,3.377c-0.485-0.415-1.209-0.492-1.935-0.205c-0.45,0.177-7.501,3.144-14.074,5.911L3.27,9.997c-0.841,0.341-1.267,0.894-1.267,1.641c0,0.523,0.222,1.234,1.278,1.652l3.667,1.467c0.317,0.951,1.053,3.159,1.238,3.746c0.11,0.348,0.388,1.225,1.09,1.43c0.144,0.049,0.294,0.074,0.447,0.074c0.443,0,0.762-0.206,0.918-0.326l2.329-1.97l2.831,2.617C15.91,20.439,16.486,21,17.261,21c0.967,0,1.701-0.805,1.854-1.584c0.083-0.427,2.812-14.129,2.812-14.127C22.172,4.19,21.733,3.62,21.45,3.377z M17.166,18.866l-4.137-3.826l-3.03,2.565c-0.359-1.107-1.301-3.922-1.301-3.922l-0.146-0.439l-4.021-1.608l1.687-0.709c4.299-1.81,11.956-5.033,13.692-5.755C19.533,7.062,17.478,17.379,17.166,18.866z"
                fill="white"
              />
              <path
                d="M16.8,8c-0.125,0-0.294,0.119-0.384,0.175c-1.288,0.803-7.746,4.478-9.517,5.484C7.398,13.859,7.75,14,7.75,14s1.151,3.445,1.39,4.2c0.239,0.756,0.431,0.774,0.431,0.774c0.053,0.023,0.105,0.032,0.153,0.032c0.039,0,0.066-0.014,0.099-0.023L11,14.375c0,0,5.363-5.428,5.686-5.744C16.946,8.378,17,8.289,17,8.201C17,8.084,16.939,8,16.8,8z"
                fill="white"
              />
            </svg>{" "}
            &nbsp; Telegram -&gt;
          </h3>
        </a>

        <a
          href="https://github.com/dordbit"
          className="group rounded-lg border border-neutral-700 px-5 py-4 transition-colors hover:border-custom-orange hover:bg-custom-orange/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 className="text-1xl font-semibold transition-transform group-hover:translate-x-1 motion-reduce:transform-none text-left flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="36"
              height="36"
            >
              <path
                d="M12 2A10 10 0 1 0 12 22A10 10 0 1 0 12 2Z"
                fill="white"
                opacity=".3"
              />
              <path
                d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"
                fill="white"
              />
            </svg>{" "}
            &nbsp; GitHub -&gt;
          </h3>
        </a>
      </div>
    </main>
  );
}
