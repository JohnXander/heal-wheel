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
}

export default function FifthLayer({ layerContainer, user }: layerProps) {

    return (
        <div className='absolute w-16 h-16 lg:w-32 lg:h-32'>
            <div className={layerContainer}>
              <div
                className='w-8 h-8 lg:w-16 lg:h-16 absolute'
                style={user?.mind > 0 ? { backgroundColor: "#A4CAFE" } : { backgroundColor: "#EBF5FF" }}>
              </div>
              <div
                className='w-8 h-8 lg:w-16 lg:h-16 absolute right-0'
                style={user?.body > 0 ? { backgroundColor: "#84E1BC" } : { backgroundColor: "#F3FAF7" }}>
              </div>
              <div
                className='w-8 h-8 lg:w-16 lg:h-16 absolute bottom-0'
                style={user?.social > 0 ? { backgroundColor: "#FACA15" } : { backgroundColor: "#FDFDEA" }}>
              </div>
              <div
                className='w-8 h-8 lg:w-16 lg:h-16 absolute bottom-0 right-0'
                style={user?.work > 0 ? { backgroundColor: "#F8B4B4" } : { backgroundColor: "#FDF2F2" }}>
              </div>
            </div>
        </div>
    )
}