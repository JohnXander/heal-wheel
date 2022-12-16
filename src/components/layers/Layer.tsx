interface layerProps {
    layerContainer: string;
    user: {
      id: string;
      name: string;
      mind: number;
      body: number;
      social: number;
      work: number;
    }
  colors: string[]
  containerSize: string
  segmentSize: string
  level: number
}

export default function Layer({ layerContainer, user, colors, containerSize, segmentSize, level }: layerProps) {

  return (
      <div className={`absolute ${containerSize}`}>
          <div className={layerContainer}>
            <div
              className={`${segmentSize} absolute`}
              style={user?.mind > level ? { backgroundColor: colors[0] } : { backgroundColor: colors[1] }}>
            </div>
            <div
              className={`${segmentSize} absolute right-0`}
              style={user?.body > level ? { backgroundColor: colors[2] } : { backgroundColor: colors[3] }}>
            </div>
            <div
              className={`${segmentSize} absolute bottom-0`}
              style={user?.social > level ? { backgroundColor: colors[4] } : { backgroundColor: colors[5] }}>
            </div>
            <div
              className={`${segmentSize} absolute bottom-0 right-0`}
              style={user?.work > level ? { backgroundColor: colors[6] } : { backgroundColor: colors[7] }}>
            </div>
          </div>
      </div>
  )
}