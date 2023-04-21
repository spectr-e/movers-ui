export default function InfoCard() {
  return (
    <div className="">
      <section class="bg-primary-white py-16">
        <div className="mx-auto text-xl text-center quote text-primary-black">
          Our achievements
        </div>
        <div class="container grid grid-cols-2 gap-8 py-8 mx-auto text-center md:grid-cols-4">
          <div>
            <h5 class="text-5xl font-bold text-primary-black">
              <span class="inline text-primary-black">217</span>
              <span class="text-primary-green">+</span>
            </h5>
            <p class="text-xs font-medium tracking-wide text-indigo-800 uppercase">
              Customers
            </p>
          </div>
          <div>
            <h5 class="text-5xl font-bold text-primary-black">
              <span class="inline text-primary-black">13</span>
              <span class="text-primary-green">+</span>
            </h5>
            <p class="text-xs font-medium tracking-wide text-indigo-800 uppercase">
              Trusted Companies
            </p>
          </div>
          <div>
            <h5 class="text-5xl font-bold text-primary-black">
              <span class="inline text-primary-black">31</span>
              <span class="text-primary-green">+</span>
            </h5>
            <p class="text-xs font-medium tracking-wide text-indigo-800 uppercase">
              Finished projects
            </p>
          </div>
          <div>
            <h5 class="text-5xl font-bold text-primary-black">
              <span class="inline text-primary-black">3</span>
              <span class="text-primary-green">+</span>
            </h5>
            <p class="text-xs font-medium tracking-wide text-indigo-800 uppercase">
              Years in business
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
