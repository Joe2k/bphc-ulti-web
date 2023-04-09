const dynamicContentMap = {
    ytvid: (dynamicContent) =>  {
        return  <iframe className="border border-4 mt-3 rounded-lg border-red-400 " width="560" height="315" src={dynamicContent} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    },
    vid: (dynamicContent) => {
        return <iframe width="560" height="315" className="border border-4 mt-3 rounded-lg border-red-400 " src={dynamicContent}/>
    },
    picture: (dynamicContent) => {
        return <div>
        <img className="border border-4 mt-3 rounded-lg border-red-400" width="560" height="315" src={dynamicContent} alt="Google Drive Image" />
        </div>
    },
}

const DynamicDisplay = ({dynamicContentType,dynamicContent}) => {
    
    return <div>
        
        {
            dynamicContentMap[dynamicContentType](dynamicContent)
        }
    </div>
}

export default function PostsComponent(){
    return <div className="grow ml-10 flex flex-col">
        <p className="text-2xl underline underline-offset-8 decoration-red-500 dark:decoration-red-400">2023</p>
        
        <div className="mt-10">
            <p className="text-lg">BPHC going to NCUC for the 4th time!</p>
            <time className="text-sm font-normal text-gray-400 dark:text-gray-500">March, 2023</time>
            <DynamicDisplay dynamicContentType="ytvid" dynamicContent="https://www.youtube.com/embed/cmuwg8XMyVg?modestbranding=1"/>
        </div>

        <div className="mt-10">
            <p className="text-lg">16 BPHC represents at Nationals</p>
            <time className="text-sm font-normal text-gray-400 dark:text-gray-500">February, 2023</time>
            <DynamicDisplay dynamicContentType="picture" dynamicContent="https://lh3.googleusercontent.com/pw/AMWts8AQhJkjSvmQKxm5shhUJ87Dr3WFvYTDkyNE-7pkWNiPigeT7a4a-p-OtIPryeoBveerlaG9r_F9UZ_blyd62Q7WPdlbD_Fuwhi8gybic1ytN1oJtT1JDjyuPAd5xpgcRVRK8Ky_IdqrLTcNORLkEC6ezA=w1386-h1040-s-no?authuser=0"/>
        </div>

        <div className="mt-10">
            <p className="text-lg">Our Alumni at OSU Invitational</p>
            <time className="text-sm font-normal text-gray-400 dark:text-gray-500">January, 2023</time>
            <DynamicDisplay dynamicContentType="vid" dynamicContent="https://lh3.googleusercontent.com/YrgTjYS4tMzmzLSqJeD4bLZ8oKG7jE-AwUSGON67145tbiBE1_O4aBZbH4RuGKscAsaw46xK8FqB1E8t6jMr0VFEiTZwJStuAtGaiuImfpLzHKp33RmGGN_NwELXLjuC4TqWltmGras=m18"/>
        </div>
    </div>
}