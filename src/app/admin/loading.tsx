import VisieLogo from "./components/parts/VisieLogo"

const Loading = () => {
  return (
    <div className="w-full h-[64vh] flex items-center justify-center opacity-10 backdrop-blur-lg">
      <VisieLogo className="w-96 h-96 animate-pulse" />
    </div>
  )
}

export default Loading;