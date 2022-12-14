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

export default function FourthLayer({ layerContainer, user }: layerProps) {

    return (
        <div className='absolute w-32 h-32 lg:w-48 lg:h-48'>
            <div className={layerContainer}>
              <div
                className='w-16 h-16 lg:w-24 lg:h-24 absolute'
                style={user?.mind > 1 ? { backgroundColor: "#76A9FA" } : { backgroundColor: "#E1EFFE" }}>
              </div>
              <div
                className='w-16 h-16 lg:w-24 lg:h-24 absolute right-0'
                style={user?.body > 1 ? { backgroundColor: "#31C48D" } : { backgroundColor: "#DEF7EC" }}>
              </div>
              <div
                className='w-16 h-16 lg:w-24 lg:h-24 absolute bottom-0'
                style={user?.social > 1 ? { backgroundColor: "#E3A008" } : { backgroundColor: "#FDF6B2" }}>
              </div>
              <div
                className='w-16 h-16 lg:w-24 lg:h-24 absolute bottom-0 right-0'
                style={user?.work > 1 ? { backgroundColor: "#F98080" } : { backgroundColor: "#FDE8E8" }}>
              </div>
            </div>
        </div>
    )
}