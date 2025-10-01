import Head from 'next/head';

const Article = () => {
    return (
        <div className="flex flex-col min-h-screen bg-black">
            <Head>
                <title>enlightenment for breakfast</title>
                <meta name="description" content="This is a detailed view of a single article" />
            </Head>

            <main className="flex-1 overflow-auto px-4 py-6 sm:px-6 sm:py-8 md:px-8 lg:px-12">
                {/* Header Image */}
                <div
                    className="relative w-full h-64 sm:h-72 md:h-96 lg:h-[500px] bg-cover bg-center rounded-lg overflow-hidden"
                    style={{ backgroundImage: 'url(/lamp.jpg)' }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4 text-center">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold text-white">
                            enlightenment for breakfast
                        </h1>
                    </div>
                </div>

                {/* Article Content */}
                <div className="mt-6 sm:mt-8 w-full max-w-3xl mx-auto px-2 sm:px-0">
                    <p className="text-gray-400 text-sm sm:text-base mb-4 text-center">
                        September 20, 2025
                    </p>
                    <div className="prose prose-sm sm:prose lg:prose-lg text-gray-300 mx-auto">
                        <p className="mb-6">just, mardy bum, 21st century schizoid man, i hate you like i love you</p>

                        <p className="mb-6">
                            I don’t like treating breakfasts as an optional meal. I don’t like waking up past 10
                            having to wait for lunch. What I do like are some bread and butter. Bananas. The
                            occasional mixed fruit jam.
                        </p>

                        <p className="mb-6">
                            Home is where routine is. Earning my sunset becomes slightly easier if I just don’t hit snooze.
                        </p>

                        <p className="mb-6">
                            It really doesn’t take a lot for me to earn my sunset. If I just watch a full length
                            movie without pausing to scroll, I call it a day. I realise my privilege and am not
                            exactly proud of it. Obviously. Priorities evolve though.
                        </p>

                        <p className="mb-6">
                            Poets have spilled enough ink about the absurdity of existence. My buddy could give up
                            half a testicle to prove that everything happens for a reason. I’m often a diplomat with
                            a slight bias for absurdists only because the community seems kinda cool. I realise my
                            privilege to be able to worry about my stance on a philosophical argument for days on
                            end. No pride there either.
                        </p>

                        <p className="mb-6">
                            Do you think the chase for absolute detachment is a clever way to turn a blind eye to
                            the miseries of people who are not privileged enough to worry about waking up on time
                            or earning their sunsets? I’d imagine the covariance graph between buddha and selfishness
                            to be scattered. It would be ridiculous to think Buddha only cared about his own sanity.
                            It would be ridiculous to think detachment is selfishness in disguise. Right?
                        </p>

                        <p className="mb-6">
                            If everybody renounced worldly possessions, the world would be so bleak. I like the
                            stickers on the back of my devices. I like my XM4s. Eternal peace sounds interesting
                            but think about ice cream waffles. “Realise that you are not your body and realise
                            that you’re merely an observer” no thank you I’d still like to cry to Radiohead with the
                            full experience and everything. I’m comfortable being naïve.
                        </p>

                        <p className="mb-6">
                            Maybe every act of humanity is selfish. If selflessness gives you joy, is it really
                            selfless? We default to either selflessness or enlightenment when we encounter a child
                            begging for food or money. You wish you could help them all but your hands are tied.
                            Or play the blame game. That’s slightly less uncomfortable if you can convince yourself.
                        </p>

                        <p className="mb-6">
                            Absolute detachment never sat well with me. Very naïvely, it feels like pussying out.
                            I’m comfortable micro dosing my way to moksha.
                        </p>

                        <p className="mb-6">jo chauka udte hue jaye, usey chakka kehte hain</p>
                    </div>

                </div>
            </main>
        </div>
    );
};

export default Article;
