export default function About() {
  return (
    <>
      <div className="container mx-auto px-1.5">
      <h1 className="text-5xl text-center bg-amber-400 py-4 px-1">
        About Page
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        beatae labore culpa exercitationem maiores vitae aspernatur perferendis
        atque assumenda, corrupti dolor amet a, quae deserunt maxime accusantium
        quisquam fugit eaque. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Laudantium corrupti, qui nulla natus tenetur temporibus.
        Repudiandae facere voluptates accusamus eum ipsam quos praesentium quia
        eos nostrum. Harum atque laboriosam corrupti.
      </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-1.5 p-1">
        <div className="rounded p-6 bg-amber-400">Item 1</div>
        <div className="rounded p-6 bg-red-300">Item 2</div>
        <div className="rounded p-6 bg-green-800">Item 3</div>
        <div className="rounded p-6 bg-green-300">Item 4</div>
      </div>
    </>
  );
}
