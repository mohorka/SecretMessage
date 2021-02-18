import Image from 'next/image'


export default function Error({ statusCode }) {
  return (
    <figure>
      <Image
        src="../public/images/image.jpg"
        alt="meme"
        width={500}
        height={500}
      />
      <figcaption>
        <h1>{statusCode}</h1>
      </figcaption>
    </figure>
  )
}

function getInitialProps({ res, err }) {
  let statusCode;
  if (res) {
    statusCode = res.statusCode
  }
  else if (err) {
    statusCode = err.statusCode
  }
  else {
    statusCode = null
  }
  return { statusCode }
}

Error.getInitialProps = getInitialProps


