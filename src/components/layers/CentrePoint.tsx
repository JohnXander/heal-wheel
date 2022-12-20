interface layerProps {
    layerContainer: string;
}

export default function CentrePoint({ layerContainer }: layerProps) {
    return (
        <div className='absolute lg:w-16 lg:h-16'>
            <div className={layerContainer}>
              <div className='bg-gray-800 lg:w-8 lg:h-8 absolute'></div>
              <div className='bg-gray-800 lg:w-8 lg:h-8 absolute right-0'></div>
              <div className='bg-gray-800 lg:w-8 lg:h-8 absolute bottom-0'></div>
              <div className='bg-gray-800 lg:w-8 lg:h-8 absolute bottom-0 right-0'></div>
            </div>
        </div>
    )
}