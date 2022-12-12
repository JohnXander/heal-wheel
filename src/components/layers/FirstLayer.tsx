interface layerProps {
    layerContainer: string;
    mind: number;
    body: number;
    social: number;
    work: number;
}

export default function FirstLayer({ layerContainer, mind, body, social, work }: layerProps) {
    return (
        <div className='absolute w-80 h-80 lg:w-96 lg:h-96'>
            <div className={layerContainer}>
              <div
                className='w-40 h-40 lg:w-48 lg:h-48 absolute'
                style={mind > 4 ? { backgroundColor: "#A4CAFE" } : { backgroundColor: "#EBF5FF" }}>
              </div>
              <div
                className='w-40 h-40 lg:w-48 lg:h-48 absolute right-0'
                style={body > 4 ? { backgroundColor: "#84E1BC" } : { backgroundColor: "#F3FAF7" }}>
              </div>
              <div
                className='w-40 h-40 lg:w-48 lg:h-48 absolute bottom-0'
                style={social > 4 ? { backgroundColor: "#FACA15" } : { backgroundColor: "#FDFDEA" }}>
              </div>
              <div
                className='w-40 h-40 lg:w-48 lg:h-48 absolute bottom-0 right-0'
                style={work > 4 ? { backgroundColor: "#F8B4B4" } : { backgroundColor: "#FDF2F2" }}>
              </div>
            </div>
        </div>
    )
}