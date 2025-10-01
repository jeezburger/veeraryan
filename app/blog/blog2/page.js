import Head from 'next/head';

const Article = () => {
    return (
        <div className="flex flex-col bg-black">
            <Head>
                <title>irritable bowl syndrome</title>
                <meta name="description" content="This is a detailed view of a single article" />
            </Head>

            <main className="px-4 py-6 sm:px-6 sm:py-8 md:px-8 lg:px-12">
                {/* Header Image */}
                <div
                    className="relative w-full rounded-lg overflow-hidden aspect-video sm:aspect-[16/9] md:aspect-[3/2] lg:aspect-[5/2]"
                    style={{ backgroundImage: 'url(/lamp.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4 text-center">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold text-white">
                            irritable bowl syndrome
                        </h1>
                    </div>
                </div>

                {/* Article Content */}
                <div className="mt-6 sm:mt-8 w-full max-w-3xl mx-auto px-2 sm:px-0">
                    <p className="text-gray-400 text-sm sm:text-base mb-4 text-center">
                        October 1, 2025
                    </p>

                    <div className="prose prose-sm sm:prose lg:prose-lg text-gray-300 mx-auto">
                        <p className="mb-6">loser, rock tha party, cheques, my name is</p>

                        <p className="mb-6">
                            My mom, like most Indian adults, is addicted to tea. It goes to the point where she’s
                            prone to headaches if she doesn’t have her daily cup of morning tea. A lot of people
                            need a shot of espresso to start their day. I’m sure a couple sutta a day never did
                            any harm.
                        </p>

                        <p className="mb-6">
                            It makes me wonder how much reliance do I have in my own life on stuff that I don’t
                            take a moment to think about? Have you ever felt bound by schedule?
                        </p>

                        <p className="mb-6">
                            Now I’m a big fan of routine. At least right now. It keeps life in order. It’s cool
                            to break it every now and then. Order does not mean monotony. My 2k a month gym
                            subscription binds me to keep going to the gym every evening. I can’t (yet) carry the
                            gym around to work out if I’m not in campus for a couple days. It’s not an argument
                            against working out. But if I were to go watch Shinchan spicy Kasukabe dancers
                            movie in the theatre, I don’t wanna have to reconsider only because I’m bound by my
                            subscription. Greatest cinematic experience btw.
                        </p>

                        <p className="mb-6">
                            You could argue I’m being a slave to movie timings. I could just go to gym in the morning.
                        </p>

                        <p className="mb-6">
                            I don’t have a conclusion. I’m Diogenes and I’m having the epiphany that my bare hands
                            can do the work I use bowls for. You could call it irritable bowl syndrome.
                        </p>

                        <p className="mb-6">
                            You know how people go on self discovery journeys to the mountains or huts in the woods?
                            Exurb1a may warn me against it but you can’t deny it sounds appealing. Just the idea of it.
                            The very naïvely romanticised idea of being isolated and primitive.
                        </p>

                        <p className="mb-6">
                            But on a more rational note, maybe the answer is not a hut in the woods.
                        </p>

                        <p className="mb-6">
                            Maybe the answer is on a solo walk to a McDonald’s near Chinnaswamy at midnight after
                            being denied entry to a club for being underage.
                            <br /><br />
                            (the mcd was closed)
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Article;
