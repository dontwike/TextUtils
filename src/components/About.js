import React, {useState} from 'react'

export default function About() {

    const [myStyle, setMyStyle] = useState(
        {
            color: 'white',
            backgroundColor: '#121212',
            fontFamily: 'Calibri',
        }
    )

    const [btnText, setBtnText] = useState("Enable Dark Mode");

    const Clicked = () => {
        if(myStyle.color === 'white') {
            setMyStyle(
                {
                    color: '#121212',
                    backgroundColor: 'white',
                }
            )
            setBtnText("Enable Dark Mode")
        } else {
            setMyStyle(
                {
                    color: 'white',
                    backgroundColor: '#121212',
                }
            )
            setBtnText("Disable Dark Mode");
        }
    };

  return (
    <div className='container' style={myStyle}>

        <h1>
            About us:
        </h1>

        <p>
        Although you probably think of basic things like tracking word count and characters when we talk about text attributes, text analyzers take the enterprise well beyond those basic stats. Text analyzers perform a wide range of functions. At its most basic, text analyzers derive meaning from text. And at its most sophisticated, it uses advanced artificial intelligence to aggregate, organize and cluster conversations based on semantic connections to create interactive data visualizations for a faster path to insight.

        And the attraction to text analyzers is not only found in the technology realm. We see a variety of industries exploring the potential this visualized insight offers.
        </p>

        <img decoding="async" alt="415 text analyzer" width="800" height="400" sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) and (max-width: 980px) 980px, (min-width: 981px) 1024px, 100vw" nitro-lazy-srcset="https://cdn-bfbao.nitrocdn.com/dAEtJyZgCpnBZXXPWAIzViPQPThPYBpq/assets/static/optimized/rev-343dcff/wp-content/uploads/415-text-analyzer-1024x584.png 1024w, https://cdn-bfbao.nitrocdn.com/dAEtJyZgCpnBZXXPWAIzViPQPThPYBpq/assets/static/optimized/rev-343dcff/wp-content/uploads/415-text-analyzer-980x559.png 980w, https://cdn-bfbao.nitrocdn.com/dAEtJyZgCpnBZXXPWAIzViPQPThPYBpq/assets/static/optimized/rev-343dcff/wp-content/uploads/415-text-analyzer-480x274.png 480w" nitro-lazy-src="https://cdn-bfbao.nitrocdn.com/dAEtJyZgCpnBZXXPWAIzViPQPThPYBpq/assets/static/optimized/rev-343dcff/wp-content/uploads/415-text-analyzer-1024x584.png" className="size-large wp-image-98082 aligncenter lazyloaded" nitro-lazy-empty="" id="NDkyOjYwMQ==-1" src="https://cdn-bfbao.nitrocdn.com/dAEtJyZgCpnBZXXPWAIzViPQPThPYBpq/assets/static/optimized/rev-343dcff/wp-content/uploads/415-text-analyzer-1024x584.png" srcSet="https://cdn-bfbao.nitrocdn.com/dAEtJyZgCpnBZXXPWAIzViPQPThPYBpq/assets/static/optimized/rev-343dcff/wp-content/uploads/415-text-analyzer-1024x584.png 1024w, https://cdn-bfbao.nitrocdn.com/dAEtJyZgCpnBZXXPWAIzViPQPThPYBpq/assets/static/optimized/rev-343dcff/wp-content/uploads/415-text-analyzer-980x559.png 980w, https://cdn-bfbao.nitrocdn.com/dAEtJyZgCpnBZXXPWAIzViPQPThPYBpq/assets/static/optimized/rev-343dcff/wp-content/uploads/415-text-analyzer-480x274.png 480w"></img>

        <p>
        And, as we mentioned previously, there are best practices to keep in mind. So, we have tips for using a text analyzer. You’ll want to make sure you’re well versed in these capabilities – and that the tool you’re using has each of these options available (and be sure to click over to explore each in-depth):<br />
        <br />
        Keyword spotting<br />
        Manual rules<br />
        Text categorization<br />
        Topic modeling<br />
        Thematic analysis<br />
        Disambiguation<br />
        Clustering<br />
        </p>

        <div className="text-center my-3">
        <button className="btn btn-primary" onClick={Clicked} type="button">{btnText}</button>
        </div>
        </div>
  )
}
