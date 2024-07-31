import React from 'react'
import { Card, Image, Button, Link } from '@nextui-org/react'

const Institutes = () => {
  return (
    <div className='px-12 py-20'>
        <div className='flex justify-between'>
          <div>
          <p className='text-purple4 font-bold text-3xl'>Discover Your Membership Options in One Place</p>
          <p className="mb-5 text-grey1 text-lg font-light w-3/4">With over 1,000 memberships from leading Sri Lankan professional organizations, industry associations, and networks, we’ve got your professional growth covered.</p>
          </div>
        </div>
        <div className='flex justify-between my-16 w-3/4 mx-auto flex-wrap'>
            <Card
                isFooterBlurred
                isPressable
                radius="lg"
                className="border-none mb-6"
                >
                <Image
                    alt="Woman listing to music"
                    className="object-cover p-2"
                    height={120}
                    src="https://opasrilanka.co/wp-content/uploads/2023/10/cropped-Kaveetha1.png"
                    width={180}
                    style={{ objectFit: 'contain' }}
                />
            </Card>
            <Card
                isFooterBlurred
                isPressable
                radius="lg"
                className="border-none mb-6"
                >
                <Image
                    alt="Woman listing to music"
                    className="object-cover p-2"
                    height={120}
                    src="https://bmkltsly13vb.compat.objectstorage.ap-mumbai-1.oraclecloud.com/cdn.ft.lk/assets/uploads/image_7eeabba7db.jpg"
                    width={180}
                    style={{ objectFit: 'contain' }}
                />
            </Card>
            <Card
                isFooterBlurred
                isPressable
                radius="lg"
                className="border-none mb-6"
                >
                <Image
                    alt="Woman listing to music"
                    className="object-cover p-2"
                    height={120}
                    src="https://lankainformation.lk/media/com_mtree/images/listings/m/53903.jpg"
                    width={180}
                    style={{ objectFit: 'contain' }}
                />
            </Card>
            <Card
                isFooterBlurred
                isPressable
                radius="lg"
                className="border-none mb-6"
                >
                <Image
                    alt="Woman listing to music"
                    className="object-cover p-2"
                    height={120}
                    src="https://www.surangatennakoon.com/wp-content/uploads/2022/10/Professional-Memberships-6.jpg"
                    width={180}
                    style={{ objectFit: 'contain' }}
                />
            </Card>
            <Card
                isFooterBlurred
                isPressable
                radius="lg"
                className="border-none mb-6"
                >
                <Image
                    alt="Woman listing to music"
                    className="object-cover p-2"
                    height={120}
                    src="https://uom.lk/sites/default/files/tlm/images/114_0.jpg"
                    width={180}
                    style={{ objectFit: 'contain' }}
                />
            </Card>
            <Card
                isFooterBlurred
                isPressable
                radius="lg"
                className="border-none"
                >
                <Image
                    alt="Woman listing to music"
                    className="object-cover p-2"
                    height={120}
                    src="https://opasrilanka.co/wp-content/uploads/2023/10/cropped-Kaveetha1.png"
                    width={180}
                    style={{ objectFit: 'contain' }}
                />
            </Card>
            <Card
                isFooterBlurred
                isPressable
                radius="lg"
                className="border-none"
                >
                <Image
                    alt="Woman listing to music"
                    className="object-cover p-2"
                    height={120}
                    src="https://bmkltsly13vb.compat.objectstorage.ap-mumbai-1.oraclecloud.com/cdn.ft.lk/assets/uploads/image_7eeabba7db.jpg"
                    width={180}
                    style={{ objectFit: 'contain' }}
                />
            </Card>
            <Card
                isFooterBlurred
                isPressable
                radius="lg"
                className="border-none"
                >
                <Image
                    alt="Woman listing to music"
                    className="object-cover p-2"
                    height={120}
                    src="https://lankainformation.lk/media/com_mtree/images/listings/m/53903.jpg"
                    width={180}
                    style={{ objectFit: 'contain' }}
                />
            </Card>
            <Card
                isFooterBlurred
                isPressable
                radius="lg"
                className="border-none"
                >
                <Image
                    alt="Woman listing to music"
                    className="object-cover p-2"
                    height={120}
                    src="https://www.surangatennakoon.com/wp-content/uploads/2022/10/Professional-Memberships-6.jpg"
                    width={180}
                    style={{ objectFit: 'contain' }}
                />
            </Card>
            <Card
                isFooterBlurred
                isPressable
                radius="lg"
                className="border-none"
                >
                <Image
                    alt="Woman listing to music"
                    className="object-cover p-2"
                    height={120}
                    src="https://uom.lk/sites/default/files/tlm/images/114_0.jpg"
                    width={180}
                    style={{ objectFit: 'contain' }}
                />
            </Card>
        </div>
        <div className='flex items-center justify-center my-10'>
          <Button as={Link} className='bg-white outline-purple1 text-purple1 font-semibold mt-2' href="#" variant="flat">
          Show All
          </Button>
        </div>
    </div>
  )
}

export default Institutes