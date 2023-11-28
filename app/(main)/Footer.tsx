import { FaXTwitter, FaGithub, FaLinkedin } from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer className="p-4 flex justify-center items-center text-rose-200 space-x-4">
      <a
        href="https://twitter.com/_cantemizyurek"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaXTwitter className="text-3xl" />
      </a>
      <a
        href="https://github.com/cantemizyurek"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="text-3xl" />
      </a>
      <a
        href="https://www.linkedin.com/in/can-temizyurek-013614267/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="text-3xl" />
      </a>
    </footer>
  )
}
