import NavBar from "../components/NavBar";

export default function AboutPage(){
return(
  <>
  <NavBar/>

<section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">About Us
        <br class="hidden lg:inline-block"/>
      </h1>
      <p class="mb-8 leading-relaxed" >

Welcome to our interactive map, the ultimate platform to Discover and track cute cats and lovable stray dogs! We are a passionate community of animal lovers, dedicated to creating a safe and loving environment for our furry friends. With wagging tails and happy purrs awaiting you, we invite you to embark on an adventure that celebrates the joy and companionship these adorable creatures bring to our lives.
</p>
      <h2 className="font-medium text-black text-2xl"> Our Mission </h2>
      <p>At our core, we believe in creating a world where every pet receives the love and care it deserves. Our mission is to provide a comprehensive and user-friendly platform that connects animal lovers, fosters responsible pet ownership, and ensures the safety and well-being of every pet.</p>

      <br/>
      <h2 className="font-medium text-black text-2xl"> Let's Make a Difference Together </h2>
      <p>At our core, we believe in creating a world where every pet receives the love and care it deserves. Our mission is to provide a comprehensive and user-friendly platform that connects animal lovers, fosters responsible pet ownership, and ensures the safety and well-being of every pet.</p>
      <div class="flex justify-center">
       
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="/images/cat-pink-ai.jpg"/>
    </div>
  </div>
</section>

  </>
)
}