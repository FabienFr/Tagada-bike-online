<template>
  <header class="relative w-full h-fit pt-7">
    <div class="pt-14 lg:pt-0">
      <div class="container h-1/6 md:max-w-8xl mx-auto">
        <nav class="flex flex-wrap items-center justify-center w-full">
          <div
            class="hidden sm:block px-6 w-full sm:w-1/2 md:w-1/4 text-center"
          >
            <button
              class="text-xl lg:text-3xl font-bold tracking-wide leading-tight text-gray-800 hover:text-pink py-5"
            >
              <a href="#ecurie" aria-label="Section écurie"> ECURIE </a>
            </button>
          </div>
          <div class="mt-8 md:mt-2 px-6 py-8 w-2/3 sm:w-1/3 xl:w-1/4 2xl:w-1/6">
            <a href="/" aria-label="Retour à l'accueil">
              <img
                class="px-8"
                src="../assets/Logo-Tagada.svg"
                alt="Tagada Bike Logo"
              />
            </a>
          </div>
          <div
            class="hidden sm:block px-6 w-full sm:w-1/2 md:w-1/4 text-center"
          >
            <button
              class="text-xl lg:text-3xl font-bold tracking-wide leading-tight text-gray-800 hover:text-pink py-5"
            >
              <a
                href="mailto:contact@tagadabike.com?subject=Tagada Bike - Demande de renseignements"
                aria-label="Contactez-nous !"
              >
                CONTACT
              </a>
            </button>
          </div>
          <div class="sm:hidden flex flex-row mt-5">
            <div class="px-6 w-1/2">
              <h4
                class="text-lg font-bold tracking-wide leading-tight hover:text-pink text-gray-800 text-center py-5"
              >
                <a href="#ecurie" aria-label="Section écurie"> ECURIE </a>
              </h4>
            </div>
            <div class="px-6 w-1/2">
              <h4
                class="text-lg font-bold tracking-wide leading-tight hover:text-pink text-gray-800 text-center py-5"
              >
                <a
                  href="mailto:contact@tagadabike.com?subject=Tagada Bike - Demande de renseignements"
                  aria-label="Contactez-nous !"
                >
                  CONTACT
                </a>
              </h4>
            </div>
          </div>
        </nav>
      </div>
      <div>
        <video
          class="w-full pt-8"
          id="hero-video"
          playsinline
          muted
          loop
          autoplay
          src="../assets/Memories_video_home_Tagada_Bike.mp4"
        >
          <div class="video-error text-pink border-2 p-4">
            Problème de réseau...
          </div>
        </video>
      </div>
    </div>
    <img
      id="losange1"
      src="../assets/LosangeRose.svg"
      class="md:hidden absolute opacity-80 top-[0.8%] w-full mx-auto h-24 lg:h-36 xl:h-48"
      alt=""
    />
    <img
      id="losange2"
      src="../assets/LosangeRose.svg"
      class="hidden md:block absolute opacity-80 top-[0.8%] left-6 h-24 lg:h-36 xl:h-48 2xl:h-72"
      alt=""
    />
    <img
      id="losange3"
      src="../assets/LosangeRose.svg"
      class="hidden md:block absolute opacity-80 top-[0.8%] right-6 h-24 lg:h-36 xl:h-48 2xl:h-72"
      alt=""
    />
    <img
      id="losange4"
      src="../assets/LosangeRose.svg"
      class="absolute opacity-80 top-[44%] right-6 h-24 lg:h-36 xl:h-48 2xl:h-72"
      alt=""
    />
    <img
      id="losange5"
      src="../assets/LosangeRose.svg"
      class="absolute opacity-80 top-[44%] left-6 h-24 lg:h-36 xl:h-48 2xl:h-72"
      alt=""
    />
    <!-- <img
      id="losange6"
      src="../assets/LosangeRose.svg"
      class="absolute opacity-80 top-[275px] md:top-[520px] lg:top-[680px] xl:top-[770px] 2xl:top-[1000px] 3xl:top-[1300px] -right-6 md:right-20 xl:right-48 2xl:right-[550px] h-24 lg:h-36 xl:h-48"
      alt=""
    />
    <img
      id="losange7"
      src="../assets/LosangeRose.svg"
      class="absolute opacity-80 top-[275px] md:top-[520px] lg:top-[680px] xl:top-[770px] 2xl:top-[1000px] 3xl:top-[1300px] -left-6 md:left-20 xl:left-48 2xl:left-[550px] h-24 lg:h-36 xl:h-48"
      alt=""
    /> -->
    <img
      id="losange8"
      src="../assets/LosangeRose.svg"
      class="hidden md:block absolute opacity-80 -bottom-[2%] left-6 h-24 lg:h-36 xl:h-48 2xl:h-72"
      alt=""
    />
    <img
      id="losange9"
      src="../assets/LosangeRose.svg"
      class="hidden md:block absolute opacity-80 -bottom-[2%] right-6 h-24 lg:h-36 xl:h-48 2xl:h-72"
      alt=""
    />
    <img
      id="losange10"
      src="../assets/LosangeRose.svg"
      class="absolute xl:hidden opacity-80 -bottom-[6%] md:-bottom-[2%] w-full mx-auto h-24 lg:h-36 xl:h-48"
      alt=""
    />
    <div class="mx-auto h-1/6 pt-8 pb-16 md:pt-12 md:pb-36 lg:pt-16 xl:pb-20">
      <div class="hidden xl:block mx-auto h-0.5 w-12 mb-8 bg-pink"></div>
      <h1
        class="text-xl xl:text-5xl 2xl:text-5xl 3xl:text-6xl text-center text-pink font-extrabold uppercase"
      >
        montures de caractère<br />
        pour créateurs d&apos;expériences
      </h1>
      <div class="hidden xl:block mx-auto h-0.5 w-12 mt-8 bg-pink"></div>
    </div>
  </header>

  <!-- Ecurie -->
  <section
    id="ecurie"
    class="overflow-hidden mt-10 xl:mt-2 pt-6 bg-gradient-to-b from-white via-gray-200 to-white"
  >
    <div class="mx-auto">
      <h2
        class="text-xl xl:text-4xl 2xl:text-4xl 3xl:text-5xl text-center text-pink mb-4 font-extrabold uppercase"
      >
        l&apos;écurie
      </h2>
      <p
        class="text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl text-center mb-12 uppercase"
      >
        Dans les startings blocs pour rencontrer votre audience
      </p>
    </div>
    <div
      class="container relative mx-auto grid grid-cols-1 md:grid-cols-2 px-12 sm:px-22"
    >
      <div
        class="order-1 flex flex-col items-center justify-center md:my-2 lg:mx-8"
      >
        <!-- <h4 class="text-5xl lg:text-7xl pb-4 lg:pb-12">LUCKY</h4> -->
        <img
          src="../assets/Lucky.png"
          alt="éco-triporteur logo modèle Lucky"
          class="h-12 sm:h-10 xl:h-20 mt-2 mb-6"
        />
        <p
          class="text-sm xl:text-xl 2xl:text-2xl px-0 sm:px-4 xl:px-4 2xl:px-8 3xl:px-48 pb-6"
        >
          Tendre et malicieux, avec sa robe acidulée et son allure printanière,
          Lucky saura user de son charme pour toutes vos opérations séduction.
        </p>
      </div>
      <div class="order-2">
        <img
          src="../assets/bg-products/1.png"
          alt="éco-triporteur modèle Lucky"
          class="w-42 pb-20 md:pb-0"
        />
      </div>
      <div
        class="order-3 md:order-4 flex flex-col items-center justify-center lg:mx-8 md:my-2"
      >
        <img
          src="../assets/Ruby.svg"
          alt="éco-triporteur logo modèle Ruby"
          class="h-10 sm:h-8 xl:h-16 mt-2 mb-6"
        />
        <p
          class="text-sm xl:text-xl 2xl:text-2xl px-0 sm:px-4 xl:px-4 2xl:px-8 3xl:px-48 pb-6"
        >
          Précieux et élégant. Avec ses effets marbrés et supports cuivrés, le
          charme de Ruby ne passe pas inaperçu lorsqu’il s’agit d’épater la
          galerie.
        </p>
      </div>
      <div class="order-4 md:order-3">
        <img
          src="../assets/bg-products/3.png"
          alt="éco-triporteur modèle Ruby"
          class="w-42 pb-20 md:pb-0"
        />
      </div>
      <div
        class="order-5 flex flex-col items-center justify-center lg:mx-8 md:my-2"
      >
        <img
          src="../assets/Tornado.svg"
          alt="éco-triporteur logo modèle Tornado"
          class="h-12 sm:h-8 xl:h-20 mt-2 mb-6"
        />
        <p
          class="text-sm xl:text-xl 2xl:text-2xl px-0 sm:px-4 xl:px-4 2xl:px-8 3xl:px-48 pb-6"
        >
          Intrépide et élancé, des lignes droites, un design épuré sur une robe
          monochrome. Derrière son apparente sobriété se cache un atout de choix
          pour se distinguer
        </p>
      </div>
      <div class="order-6">
        <img
          src="../assets/bg-products/5.png"
          alt="éco-triporteur logo modèle Tornado"
          class="w-42"
        />
      </div>
      <img
        src="../assets/BandeEtoilesGauche.svg"
        class="absolute rotate-180 top-0 -left-48 lg:-left-64 h-full"
        alt=""
      />
      <img
        src="../assets/BandeEtoilesGauche.svg"
        class="absolute rotate-180 top-0 -right-48 lg:-right-64 h-full"
        alt=""
      />
    </div>
    <div class="pt-20">
      <div class="flex w-full mx-auto justify-center top-[30%]">
        <img src="../assets/tagadaBump.svg" class="h-20" alt="" />
      </div>
      <p
        class="mx-auto w-[300px] sm:w-[600px] xl:w-[800px] text-xl xl:text-3xl text-center text-pink font-bold p-6 mt-2"
      >
        Tous nos triporteurs sont disponibles à la location <br />pour la durée
        de vos campagnes de communication <br />de 1 jour à plusieurs mois.
      </p>
    </div>
  </section>

  <!-- Tiercé gagnant -->
  <section class="relative mx-auto bg-yellow overflow-hidden mt-20">
    <div class="mx-auto h-fit py-16">
      <div class="flex w-full h-full">
        <img
          id="point1"
          src="../assets/Point.svg"
          class="absolute -top-2 md:-top-[144px] -right-16 md:-right-32 h-40 md:h-60"
          alt=""
        />
        <img
          id="point2"
          src="../assets/Point.svg"
          class="absolute top-[400px] md:-top-[144px] -left-16 md:-left-32 h-40 md:h-60"
          alt=""
        />
        <img
          id="point4"
          src="../assets/Point.svg"
          class="md:hidden absolute top-[800px] md:-top-[144px] -right-16 md:-left-32 h-40 md:h-60"
          alt=""
        />
        <img
          id="point5"
          src="../assets/Point.svg"
          class="md:hidden absolute top-[1200px] md:-top-[144px] -left-16 md:-left-32 h-40 md:h-60"
          alt=""
        />
        <img
          id="point3"
          src="../assets/Point.svg"
          class="hidden md:block absolute w-full mx-auto -bottom-[170px] xl:-top-[144px] h-40 md:h-60"
          alt=""
        />
        <img
          id="point6"
          src="../assets/Point.svg"
          class="hidden xl:block absolute -bottom-[170px] xl:-bottom-[144px] xl:left-[16%] 2xl:left-[20%] h-40 md:h-60"
          alt=""
        />
        <img
          id="point7"
          src="../assets/Point.svg"
          class="hidden xl:block absolute -bottom-[170px] xl:-bottom-[144px] xl:right-[16%] 2xl:right-[20%] h-40 md:h-60"
          alt=""
        />
      </div>
      <div>
        <h2
          class="relative mb-4 py-12 text-xl xl:text-4xl 2xl:text-5xl text-center text-gray-800 font-extrabold uppercase subpixel-antialiased"
        >
          Le tiercé gagnant de vos événements
        </h2>
        <div
          class="container mx-auto flex flex-row flex-wrap px-6 2xl:px-32 3xl:px-96"
        >
          <div class="relative xl:w-1/3 px-6 pb-6">
            <h3 class="pb-2 text-2xl lg:text-3xl">Tape à l’oeil</h3>
            <div class="h-0.5 w-full bg-pink"></div>
            <p
              class="pt-2 text-gray-800 text-left 3xl:text-justify 2xl:text-2xl"
            >
              Sobre et élégante, pop et acidulée ou bien fraiche et distinguée,
              votre monture ne passera jamais inaperçue.
            </p>
            <p
              class="pt-2 text-gray-800 text-left 3xl:text-justify 2xl:text-2xl"
            >
              Agile, rapidement déployable, que d’atouts réunis pour vos
              lancements de produits, action street marketing, activation de
              marque, festival, etc.
            </p>
            <p
              class="pt-2 text-gray-800 text-left 3xl:text-justify 2xl:text-2xl"
            >
              Faites le choix d’un attelage atypique vecteur d’attention et de
              curiosité.
            </p>
          </div>
          <div class="relative xl:w-1/3 px-6 pb-6">
            <h3 class="pb-2 text-2xl lg:text-3xl">Éco-conçu</h3>
            <div class="h-0.5 w-full bg-pink"></div>
            <p
              class="pt-2 text-gray-800 text-left 3xl:text-justify 2xl:text-2xl"
            >
              Conçus au sein de nos ateliers, les coffres des montures Tagada
              Bike sont réalisés à partir de panneaux de plastique recyclé en
              Bretagne.
            </p>
            <p
              class="pt-2 text-gray-800 text-left 3xl:text-justify 2xl:text-2xl"
            >
              L’emploi de matériaux issus du réemploi ou bio sourcés est
              privilégié pour tous les autres éléments de fabrication.
            </p>
          </div>
          <div class="relative xl:w-1/3 px-6 pb-6">
            <h3 class="pb-2 text-2xl lg:text-3xl break-normal">Customisable</h3>
            <div class="h-0.5 w-full bg-pink"></div>
            <p
              class="pt-2 text-gray-800 text-left 3xl:text-justify 2xl:text-2xl"
            >
              Imaginée pour s’adapter à toutes les courses, chaque monture
              Tagada Bike est customisable pour répondre au mieux aux besoins de
              son cavalier.
            </p>
            <p
              class="pt-2 text-gray-800 text-left 3xl:text-justify 2xl:text-2xl"
            >
              Tablettes, porte toppings, bacs isothermes, batterie… choisissez
              l’équipement idéal pour arriver en tête de course.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Attelages -->
  <section class="mt-20">
    <div class="container mx-auto mt-12 md:mt-16 xl:mt-36 py-6 bg-blue">
      <h2
        class="text-xl xl:text-4xl 2xl:text-5xl text-center text-white font-extrabold uppercase"
      >
        Nos Attelages
      </h2>
    </div>
    <div class="container mx-auto">
      <div class="grid mx-auto grid-cols-2 md:grid-cols-5">
        <div
          class="aspect-square flex flex-col order-1 items-center justify-center w-full h-full"
        >
          <span
            class="text-pink text-lg xl:text-2xl 2xl:text-4xl 3xl:text-5xl text-center font-extrabold px-1"
            >Trappes d'accès <br /><span class="text-blue">supérieures</span>
            <br />et <br />
            <span class="text-blue">latérales</span></span
          >
        </div>
        <div
          class="aspect-square flex flex-col order-2 items-center justify-center w-full h-full bg-pink"
        >
          <span
            class="text-white text-3xl lg:text-4xl 2xl:text-5xl 3xl:text-6xl font-bold pt-3"
            >Coffre</span
          >
          <span class="text-blue text-7xl lg:text-9xl font-extrabold">XL</span>
          <span
            class="pb-3 text-white text-5xl lg:text-6xl 2xl:text-7xl font-bold"
            >500L</span
          >
        </div>
        <div
          class="aspect-square flex flex-col order-4 md:order-3 items-center justify-center w-full h-full"
        >
          <span
            class="text-pink text-5xl lg:text-7xl 2xl:text-7xl 3xl:text-9xl font-extrabold"
            >100kg</span
          >
          <span
            class="text-blue text2xl lg:text-3xl 2xl:text-5xl text-center font-extrabold pt-2"
            >de charge utile</span
          >
        </div>
        <div
          class="aspect-square flex flex-col order-3 md:order-4 items-center justify-center w-full h-full bg-pink"
        >
          <span
            class="text-white text-2xl lg:text-4xl 2xl:text-5xl 3xl:text-6xl text-center font-extrabold"
            >Assistance</span
          >
          <span
            class="text-blue uppercase text-2xl lg:text-4xl 2xl:text-5xl 3xl:text-7xl text-center font-extrabold"
            >électrique</span
          >
        </div>
        <div
          class="aspect-square flex flex-col order-5 items-center justify-center w-full h-full"
        >
          <span
            class="text-blue text-lg lg:text-2xl 2xl:text-4xl 3xl:text-5xl text-center"
            >surface <br />personnalisable</span
          >
          <div class="flex flex-row">
            <span class="text-pink text-6xl lg:text-9xl font-extrabold">2</span>
            <span class="text-blue text-xl 2xl:text-3xl font-extrabold mt-1"
              >m2</span
            >
          </div>
        </div>
        <div
          class="aspect-square flex flex-col order-6 items-center justify-center w-full h-full bg-pink"
        >
          <span
            class="text-blue text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-8xl font-extrabold"
            >tablettes</span
          >
          <span
            class="text-white text-lg lg:text-xl xl:text-2xl 2xl:text-5xl text-center"
            >avant <br />et arrière</span
          >
        </div>
        <div
          class="aspect-square flex flex-col order-8 md:order-7 items-center justify-center w-full h-full"
        >
          <span
            class="text-pink text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl text-center font-extrabold pt-2"
            >Large choix de <br /><span class="text-blue">décorations</span>
            <br />et<br />
            <span class="text-blue">accessoires</span></span
          >
        </div>
        <div
          class="aspect-square flex flex-col order-7 lg:order-8 items-center justify-center w-full h-full bg-pink"
        >
          <span
            class="text-3xl lg:text-5xl xl:6xl 2xl:text-6xl 3xl:text-8xl font-extrabold text-blue"
            >Batterie</span
          >
          <span
            class="text-white text-center text-md xl:text-lg 2xl:text-4xl px-1"
            >Rechargez vos équipements</span
          >
        </div>
        <div
          class="aspect-square flex flex-col order-9 items-center justify-center w-full h-full"
        >
          <span class="text-pink text-2xl 2xl:text-5xl">Dimensions</span>
          <span
            class="text-blue text-2xl xl:text-4xl 2xl:text-6xl 3xl:text-7xl font-extrabold"
            >L = 250</span
          >
          <span
            class="text-blue text-2xl xl:text-4xl 2xl:text-6xl 3xl:text-7xl font-extrabold"
            >l = 90</span
          >
          <span
            class="text-blue text-2xl xl:text-4xl 2xl:text-6xl 3xl:text-7xl font-extrabold"
            >h = 200</span
          >
        </div>
        <div
          class="aspect-square flex flex-col order-10 items-center justify-center w-full h-full bg-pink"
        >
          <span
            class="text-white text-lg xl:text-2xl 2xl:text-4xl 3xl:text-5xl text-center pb-2 2xl:pb-6"
            >Nous étudions <br />toutes vos envies...</span
          >
          <button
            onclick="location.href='mailto:contact@tagadabike.com?subject=Tagada Bike - Demande de renseignements'"
            class="p-2 2xl:p-4 3xl:p-8 bg-blue hover:bg-white text-white hover:text-pink text-lg 2xl:text-4xl 3xl:text-5xl uppercase"
          >
            contact
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- Etalons -->
  <section class="container mx-auto overflow-hidden relative mt-20">
    <div class="opacity-50">
      <img
        src="../assets/BandeDePoints.svg"
        class="absolute top-0 -left-16 h-full"
        alt=""
      />
      <img
        src="../assets/BandeDePoints.svg"
        class="absolute top-0 -right-16 h-full"
        alt=""
      />
    </div>
    <div class="mx-auto mb-16">
      <h2
        class="text-xl xl:text-4xl 2xl:text-4xl 3xl:text-5xl text-center text-pink mb-4 font-extrabold uppercase"
      >
        nos étalons
      </h2>
      <p
        class="text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl text-center uppercase px-4"
      >
        Des montures d’exception pour sortir le grand jeu
      </p>
    </div>
    <div
      class="container mx-auto h-full bg-gradient-to-t from-white via-gray-200 to-white mb-12 px-6 2xl:px-40 3xl:px-96"
    >
      <div
        class="mx-auto flex flex-col lg:flex-row px-4 xl:px-16 2xl:px-32 xl:pb-16"
      >
        <div class="lg:order-2 lg:w-5/12 2xl:p-0 2xl:mb-24">
          <img
            class="rounded-lg opacity-90 md:mx-auto md:w-[320px] lg:w-[650px] xl:[w-850px] 2xl:pr-40"
            src="../assets/Rocket.png"
            alt="éco-triporteur modèle Rocket"
          />
        </div>
        <div
          class="lg:order-1 lg:w-7/12 flex flex-col items-center justify-center"
        >
          <img
            src="../assets/Rocket.svg"
            alt="éco-triporteur logo modèle Rocket"
            class="h-24 mt-6 mb-4"
          />
          <h4 class="text-blue text-lg lg:text-xl 2xl:text-3xl text-center font-bold py-6">Set DJ <br/>pour animations de qualité</h4>
          <p class="2xl:text-2xl px-4 pb-20 md:px-48 3xl:px-40 lg:px-6">
            Lumières et sound-system intégré, avec Rocket c’est toute la
            cavalerie qui débarque en fanfare.
          </p>
        </div>
      </div>
      <div class="mx-auto flex flex-col lg:flex-row px-4 xl:px-16 2xl:px-32">
        <div class="lg:w-5/12 2xl:p-0">
          <img
            class="rounded-lg opacity-90 md:mx-auto md:w-[320px] lg:w-[650px] 2xl:pl-40"
            src="../assets/Ringo.png"
            alt="éco-triporteur modèle Ringo"
          />
        </div>
        <div class="lg:w-7/12 flex flex-col items-center justify-center">
          <img
            src="../assets/Ringo.svg"
            alt="éco-triporteur logo modèle Ringo"
            class="h-24 mt-6 mb-4"
          />
          <h4 class="text-pink text-lg lg:text-xl 2xl:text-3xl text-center font-bold py-6">Set environnement <br/>pour animations responsables</h4>
          <p class="2xl:text-2xl px- md:px-48 3xl:px-40 lg:px-6">
            Amis des festivals ou des opérations de street cleaning, Ringo est
            le compagnon de ceux qui s’engagent.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Imagination -->
  <section
    class="relative flex flex-col bg-blue mx-auto w-full overflow-hidden items-center justify-center h-fit mt-20 px-3 py-24"
  >
    <div class="container mx-auto h-fit">
      <div class="flex w-full h-full">
        <img
          id="losangeA"
          src="../assets/LosangeJaune.svg"
          class="absolute top-10 sm:-top-[83px] -left-10 h-32 sm:h-40 lg:h-52 xl:h-60 2xl:h-80"
          alt=""
        />
        <img
          id="losangeB"
          src="../assets/LosangeJaune.svg"
          class="absolute top-10 sm:-top-[83px] -right-10 h-32 sm:h-40 lg:h-52 xl:h-60 2xl:h-80"
          alt=""
        />
        <img
          id="losangeC"
          src="../assets/LosangeJaune.svg"
          class="absolute -bottom-10 md:-bottom-16 lg:-bottom-20 xl:-bottom-10 2xl:-bottom-20 right-1 sm:right-6 md:right-24 lg:right-28 xl:right-40 2xl:right-80 h-32 sm:h-40 lg:h-52 xl:h-60 2xl:h-80"
          alt=""
        />
        <img
          id="losangeD"
          src="../assets/LosangeJaune.svg"
          class="absolute -bottom-10 md:-bottom-16 lg:-bottom-20 xl:-bottom-10 2xl:-bottom-20 left-1 sm:left-6 md:left-24 lg:left-28 xl:left-40 2xl:left-80 h-32 sm:h-40 lg:h-52 xl:h-60 2xl:h-80"
          alt=""
        />
      </div>
      <div>
        <h3
          class="relative text-2xl xl:text-4xl 2xl:text-5xl font-bold text-gray-800 text-center"
        >
          Votre imagination est sans limite ?<br />Notre créativité aussi !
        </h3>
        <p class="relative pt-8 text-xl text-center uppercase">
          Notre studio de fabrication est à votre écoute pour donner vie à
          <br />vos idées et se tient prêt à agrandir l’écurie selon vos
          besoins.
        </p>
        <button
          onclick="location.href='mailto:contact@tagadabike.com?subject=Tagada Bike - Demande de renseignements'"
          class="relative mx-auto rounded-full flex items-center justify-center h-8 w-32 mt-8 py-6 bg-yellow hover:bg-pink text-blue font-extrabold uppercase"
        >
          contact
        </button>
      </div>
    </div>
  </section>

  <!-- Aventure -->
  <section class="relative overflow-hidden mx-auto mt-28 mb-16">
    <div>
      <img
        src="../assets/BandeEtoilesGauche.svg"
        class="absolute rotate-180 top-0 -left-48 lg:-left-64 h-full"
        alt=""
      />
      <img
        src="../assets/BandeEtoilesGauche.svg"
        class="absolute rotate-180 top-0 -right-52 md:-right-32 lg:-right-4 h-full"
        alt=""
      />
    </div>
    <a
      href="https://juicycreation.fr/"
      name="site web juicy création"
      aria-label="Venez découvrir les nombreuses créations sur mesure & xxl de nos équipes"
      target="_blank"
    >
      <img
        src="../assets/Juicy_Logo_Or.png"
        alt=""
        class="mx-auto h-20 mb-12"
      />
    </a>
    <div class="mx-auto px-4">
      <h3
        class="text-xl xl:text-4xl 2xl:text-4xl 3xl:text-5xl text-center text-pink font-bold uppercase px-4 pb-16"
      >
        L’aventure Tagada Bike <br />a germé au sein du studio de Juicy Creation
      </h3>
    </div>
    <div class="flex flex-col lg:flex-row items-center justify-center mb-12">
      <div class="w-full lg:w-5/12 px-8 md:px-48 lg:px-6">
        <p class="2xl:text-2xl 2xl:px-10">
          Nous concevons des œuvres uniques et sur mesure (souvent XXL) pour
          valoriser les marques et leur fournir le plus beau des écrins.<br /><br />
          Avec ce nouveau projet, nous voulions nous réinventer et nous
          challenger en apportant une solution plus mobile pour aller à la
          rencontre de votre public, quel qu’il soit.<br /><br />
          Conscient et sensible aux enjeux environnementaux, notre mission est
          d’apporter une solution la plus neutre possible : nos triporteurs sont
          éco conçus, avec plus de 80% de matériaux recyclés et une impression
          verte pour vos choix de personnalisation.
        </p>
      </div>
      <a
        target="_blank"
        href="https://www.instagram.com/juicy_creation/?hl=fr"
        name="Juicy Création Instagram"
        aria-label="Venez découvrir les références de l'équipe pluridsciplinaire de Juicy Création"
      >
        <div class="grid grid-cols-2 pt-12 lg:pt-0 px-6">
          <img
            class="rounded-tl-full object-cover object-center w-[150px] h-[150px] md:w-[200px] md:h-[200px]"
            src="../assets/Insta1.jpg"
            alt="éco-triporteur pour vos énénements - Snowpark - Juicy création"
          />
          <img
            class="rounded-tr-full object-cover object-center w-[150px] h-[150px] md:w-[200px] md:h-[200px]"
            src="../assets/Insta2.jpg"
            alt="éco-triporteur pour vos énénements - Muggler - Juicy création"
          />
          <img
            class="rounded-bl-full object-center w-[150px] h-[150px] md:w-[200px] md:h-[200px]"
            src="../assets/Insta3.jpg"
            alt="éco-triporteur pour vos énénements - Val-de-Reuil - Juicy création"
          />
          <img
            class="rounded-br-full object-cover object-center w-[150px] h-[150px] md:w-[200px] md:h-[200px]"
            src="../assets/Insta4.jpg"
            alt="éco-triporteur pour vos énénements - JAmel Comedy Club - Juicy création"
          />
        </div>
      </a>
    </div>
  </section>

  <!-- footer -->
  <footer text-center class="w-full bg-pink h-fit pt-16 pb-12">
    <div class="mx-auto pb-16">
      <h2
        class="text-xl xl:text-4xl 2xl:text-4xl 3xl:text-5xl text-center text-white font-extrabold uppercase pb-10"
      >
        éco-triporteurs à toute allure
      </h2>

      <div class="flex mx-auto items-center justify-center w-full h-fit">
        <a href="https://www.instagram.com/tagadabike/?hl=fr" target="_blank">
          <img
            src="../assets/bandeau-Instagram-new.png"
            alt="références clients - éco-triporteurs sur mesure"
          />
        </a>
      </div>
    </div>
    <div class="flex flex-row mx-auto items-center justify-center">
      <div
        class="container flex flex-col lg:flex-row items-start justify-between px-6 xl:px-16"
      >
        <div
          class="w-full pb-10 lg-pb-0 lg:w-4/12 text-center lg:text-left text-sm"
        >
          <h4
            class="text-white font-bold uppercase text-md xl:text-lg 2xl:text-2xl pb-2"
          >
            Le quinté gagnant
          </h4>
          <ul
            class="text-white text-xs 2xl:text-sm lg:list-disc xl:pt-10 2xl:pt-0"
          >
            <li>Agence évènementielle</li>
            <li>Traiteur – Restauration – Hôtellerie</li>
            <li>Festival – Rassemblement festif</li>
            <li>Retail – Grande Distribution</li>
          </ul>
        </div>
        <div class="lg:hidden mx-auto h-0.5 w-12 mb-8 bg-white"></div>
        <div class="w-full pb-10 lg-pb-0 lg:w-4/12 text-center text-sm">
          <h4 class="lg:hidden text-white uppercase text-md font-bold">
            triporteurs <br />éco-conçus <br />pour événements <br />à votre
            image
          </h4>
          <h4
            class="hidden lg:block text-white uppercase text-md xl:text-lg 2xl:text-2xl font-bold"
          >
            triporteurs éco-conçus pour événements à votre image
          </h4>
          <br />
          <span class="text-white text-xs italic"
            >Parier comporte des risques, sauf avec Tagada Bike, la valeur sure
            pour vos <bold>évènements</bold>,
            <bold>lancement de produits</bold>,
            <bold>activation de marque</bold>,
            <bold>points d’information</bold>, <bold>Food show</bold>...</span
          >
        </div>
        <div class="lg:hidden mx-auto h-0.5 w-12 mb-8 bg-white"></div>
        <div class="w-full lg:w-4/12 text-center lg:text-right text-sm">
          <h4 class="lg:hidden text-white font-bold uppercase text-md pb-2">
            pas <br />de formulaire <br />à remplir
          </h4>
          <h4
            class="hidden lg:block text-white font-bold uppercase text-md xl:text-lg 2xl:text-2xl pb-2"
          >
            pas de formulaire à remplir
          </h4>
          <div class="xl:pt-10 2xl:pt-0">
            <span class="text-white text-xs 2xl:text-sm"
              >Vous avez déjà bien assez à faire, <br/>à nous de cravacher.<br/>On vous répondra au
              galop !
            </span><br />
            <span class="text-white text-xs 2xl:text-sm xl:pl-12"
              >Brice : <a href="tel:+33688981689">+33 6 88 98 16 89</a><br/>David : <a href="tel:+33673711744">+33 6 73 71 17 44</a><br/><a href='mailto:contact@tagadabike.com?subject=Tagada Bike - Demande de renseignements'>contact@tagadabike.com</a><br />
              </span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="container flex mx-auto justify-center pt-8 ">
      <a
        aria-label="Chat on WhatsApp"
        href="https://wa.me/673711744"
        target="_blank"
      >
        <img
          alt="Chat WhatsApp link"
          src="../assets/whatsapp-100.svg"
          class="pr-2 h-10 md:h-12"
        />
      </a>
      <a
        aria-label="Chat on Linkedin"
        href="https://www.linkedin.com/showcase/tagada-bike/"
        target="_blank"
      >
        <img
          alt="Linkedin link"
          src="../assets/Linkedin_icon.svg"
          class="px-5 h-10 md:h-12"
        />
      </a>
      <a
        aria-label="Chat on Instagram"
        href="https://www.instagram.com/tagadabike/?hl=fr"
        target="_blank"
      >
        <img
          alt="Instagram link"
          src="../assets/instagram_icon.svg"
          class="pl-2 h-10 md:h-12"
        />
      </a>
    </div>
  </footer>
</template>

<style></style>
