import Head from 'next/head';

const Article = () => {
    return (
        <div className="flex flex-col bg-black">
            <Head>
                <title>Mathew Almeida</title>
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
                            Mathew Almeida
                        </h1>
                    </div>
                </div>

                {/* Article Content */}
                <div className="mt-6 sm:mt-8 w-full max-w-3xl mx-auto px-2 sm:px-0">
                    <p className="text-gray-400 text-sm sm:text-base mb-4 text-center">
                        October 22, 2025
                    </p>

                    <div className="prose prose-sm sm:prose lg:prose-lg text-gray-300 mx-auto whitespace-pre-line">
                        <span>
                            {`My old ways, take my breath away, trunks, stuck on the puzzle
                        
I met Mathew Almeida at a Feni distillery in south goa. We signed up for four tester shots and the lore behind Feni for half a thousand per head. What was supposed to be a quick stop before lunch turned into a three hour history lesson on the origins of Goa. I cannot exactly recall how the lore went on from cashew fruits to controversial opinions on what it really means to be native.
                        
What I can recall though, is that there are only two or three `}
                            <i>real</i>
                            {` goans in goa. Mathew is one of them.

Mathew is a storyteller. The way he wraps you in on a story of fruits and spices with references to world history is remarkable. He was brimming with so many stories and so much information that I suspect his pod belly was an extension of his brain. More than the stories, it's his opinions on the stories that really hooks you in. You know how unbiased news channels get lesser viewers? It's kinda like that. As tragic as it is, there's gotta be some spicy bias to really attract viewers. There's gotta be some subtle remark that pushes you away from an unbiased opinion. Mathew's was not so subtle. 

My friend Akshaan doesn't get the hype around ancestral pride. He is (or claims to be) the descendant of a royal Rajasthani family. Due to whatever complications, his grandfather cut off from the royal family and decided to start a new life. So now when Akshaan visits Jaipur, he stays in trashy hotels instead of his royal palace. Regardless of all this, he claims to have no pride of his ancestry. It makes sense because despite his glorious ancestral history, he still solves three DSA questions a day to step foot on the corporate ladder. There's nothing about that chopped mf that says royal.

Mathew has a lot of pride for his ancestry. When that pride blends into a slight superiority complex is arguable. He claims his bloodline in goa goes back for more than 500 years. Back when Goa was a bustling port and a promised trade center of the world. Back when the Portuguese were "gifted" Goa. All before India snatched its glorious past away. He didn't really make an attempt to hide his resentment towards non native goans or ghatis living in Goa. And no I don't mean the Bihari laborers or the rich south Delhi brats. He smirked at the thought of my konkan friend, whose ancestors have lived in goa for more than five generations, being a real goan. Mostly because of his surname.

I loved how passionate Mathew was about everything he talked about. Despite that, his belief of people staying where they are native to did not exactly sound right to me. When we bid him farewell, Suhu questioned how far back does one's bloodline need to have lived in a particular place to become native to it? We concluded that it's subjective to different people. I personally feel it shouldn't matter. A rich cultural ancestry is cool but that should not be linked with any superiority. 

We said goodbye to Mathew at least five times. Every time we were about to sit in the car, a new question would delay our exit by another fifteen minutes. Finally, we exchanged numbers before taking a final few recommendations for authentic Goan restaurants only to feast in Burger Factory later.

He individually wished Akshaan, Suhu and I good night on our numbers later that night. Then good morning the next day. A happy Diwali the day after that. Followed by a follow request on Instagram the day after that.

90ml of coffee Feni does not get you tipsy.`}
                        </span>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Article;
