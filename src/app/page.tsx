interface Mod {
  name: string;
  url: string;
}

const mods: Mod[] = [
  {name: "Kotlin for Forge", url: "https://www.curseforge.com/minecraft/mc-mods/kotlin-for-forge"},
  {name: "Future MC", url: "https://www.curseforge.com/minecraft/mc-mods/future-mc"},
  {name: "Ex Deorum", url: "https://www.curseforge.com/minecraft/mc-mods/ex-deorum"},
  {name: "Forestry: CE", url: "https://www.curseforge.com/minecraft/mc-mods/forestry-community-edition"},
]
mods.push(mods[0])

export default function Home() {
  return (
    <>
      <main>
        <div className="flex flex-col items-center">
          <h1 className="thedarkcolour-color">Max Carrillo</h1>
          <h1>Minecraft Mod Developer with 85+ Million Downloads</h1>
          <div className="">
            <h2 className="overflow-hidden flex creator-label">Creator of&nbsp;<span className="grid animate-mods">
              {mods.map((mod, i) => (<a href={mod.url} key={i}>{mod.name}</a>))}
            </span>
            </h2>
          </div>
          {/*<a href="https://github.com/thedarkcolour">*/}
          {/*  <img src="../../public/github.png" alt="GitHub profile for thedarkcolour"/>*/}
          {/*</a>*/}
        </div>
      </main>
      <footer>
      </footer>
    </>
  );
}
