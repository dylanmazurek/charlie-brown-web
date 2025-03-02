export default function CastSection() {
  const cast = [
    {
      name: "Dylan Mazurek",
      character: "Charlie Brown",
      bio: "Dylan brings Charlie Brown's endearing charm and eternal optimism to life in this production.",
      imageUrl: "https://placehold.co/300x400/yellow/white?text=Charlie+Brown",
    },
    {
      name: "Rebecca Symonds",
      character: "Lucy Van Pelt",
      bio: "Rebecca perfectly captures Lucy's bossy yet lovable personality and her special brand of 5-cent psychiatry.",
      imageUrl: "https://placehold.co/300x400/blue/white?text=Lucy",
    },
    {
      name: "Bradley Storer",
      character: "Schroeder",
      bio: "Bradley combines musical talent and acting skill to embody Schroeder and his devotion to Beethoven.",
      imageUrl: "https://placehold.co/300x400/purple/white?text=Schroeder",
    },
    {
      name: "Dinesh Mathew",
      character: "Snoopy",
      bio: "Dinesh brings everyone's favorite beagle to life with boundless energy and imagination.",
      imageUrl: "https://placehold.co/300x400/white/black?text=Snoopy",
    },
    {
      name: "Samuel Dyer",
      character: "Linus Van Pelt",
      bio: "Samuel portrays the philosophical, blanket-carrying Linus with both vulnerability and wisdom.",
      imageUrl: "https://placehold.co/300x400/red/white?text=Linus",
    },
    {
      name: "Britni Leslie",
      character: "Sally Brown",
      bio: "Britni perfectly captures Sally's sweet yet demanding personality and her crush on 'Sweet Babboo' Linus.",
      imageUrl: "https://placehold.co/300x400/pink/white?text=Sally",
    },
    {
      name: "Samantha Stewart",
      character: "Woodstock",
      bio: "Samantha brings a unique physical performance to the non-speaking but expressive role of Snoopy's sidekick.",
      imageUrl: "https://placehold.co/300x400/yellow/black?text=Woodstock",
    },
  ];

  return (
    <section id="cast" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[var(--charlie-green)] mb-2">Meet the Cast</h2>
          <p className="text-xl text-gray-700">
            Featuring talented performers bringing the beloved Peanuts characters to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cast.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-60 overflow-hidden">
                <img
                  src={member.imageUrl}
                  alt={member.character}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-[var(--charlie-blue)] font-semibold mb-3">
                  as {member.character}
                </p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}