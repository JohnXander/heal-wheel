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
  primaryColors: string[]
  containerSize: string
  segmentSize: string
  level: number
}

export default function PrimaryLayer({ layerContainer, user, primaryColors, containerSize, segmentSize, level }: layerProps) {

  return (
      <div className={`absolute ${containerSize}`}>
          <div className={layerContainer}>
            <div
              className={`${segmentSize} absolute`}
              style={user?.mind > level ? { backgroundColor: primaryColors[0] } : { backgroundColor: primaryColors[1] }}>
            </div>
            <div
              className={`${segmentSize} absolute right-0`}
              style={user?.body > level ? { backgroundColor: primaryColors[2] } : { backgroundColor: primaryColors[3] }}>
            </div>
            <div
              className={`${segmentSize} absolute bottom-0`}
              style={user?.social > level ? { backgroundColor: primaryColors[4] } : { backgroundColor: primaryColors[5] }}>
            </div>
            <div
              className={`${segmentSize} absolute bottom-0 right-0`}
              style={user?.work > level ? { backgroundColor: primaryColors[6] } : { backgroundColor: primaryColors[7] }}>
            </div>
          </div>
      </div>
  )
}