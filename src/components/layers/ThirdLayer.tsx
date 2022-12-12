interface layerProps {
    layerContainer: string;
    mind: number;
    body: number;
    social: number;
    work: number;
}

export default function ThirdLayer({ layerContainer, mind, body, social, work }: layerProps) {
    return (
        <div className='absolute w-48 h-48 lg:w-64 lg:h-64'>
            <div className={layerContainer}>
              <div
                className='w-24 h-24 lg:w-32 lg:h-32 absolute'
                style={mind > 2 ? { backgroundColor: "#A4CAFE" } : { backgroundColor: "#EBF5FF" }}>
              </div>
              <div
                className='w-24 h-24 lg:w-32 lg:h-32 absolute right-0'
                style={body > 2 ? { backgroundColor: "#84E1BC" } : { backgroundColor: "#F3FAF7" }}>
              </div>
              <div
                className='w-24 h-24 lg:w-32 lg:h-32 absolute bottom-0'
                style={social > 2 ? { backgroundColor: "#FACA15" } : { backgroundColor: "#FDFDEA" }}>
              </div>
              <div
                className='w-24 h-24 lg:w-32 lg:h-32 absolute bottom-0 right-0'
                style={work > 2 ? { backgroundColor: "#F8B4B4" } : { backgroundColor: "#FDF2F2" }}>
              </div>
            </div>
        </div>
    )
}