/* eslint-disable react/prop-types */
import { Card, CardBody, CardFooter, Heading, Image, Stack, Text } from '@chakra-ui/react'
import Buttons from './Buttons';
import { FaShoppingBag } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { FaMoneyBill1Wave } from "react-icons/fa6";

// eslint-disable-next-line react/prop-types
export default function JobCard({ job }) {
    // eslint-disable-next-line react/prop-types
    const { company_logo, job_title, salary, address, duty_variant, post, job_action } = job;


    return (
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
        >
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '40%' }}
                src={company_logo}
                alt='Comapny logo'
            />

            <Stack>
                <CardBody className="flex flex-col justify-start gap-4">
                    <Heading size='lg' className='text-start'>{job_title}</Heading>

                    <div className='flex gap-4 text-lg text-[#6A6A6A]'>
                        <div className="flex gap-2 justify-center items-center">
                            <FaShoppingBag fontSize={'1.5rem'}/>
                            <Text py='2'>{post}</Text>
                        </div>
                        {/* // eslint-disable-next-line react/prop-types */}
                        <div className="flex gap-2 justify-center items-center">
                            <FaLocationPin fontSize={'1.5rem'} />
                            <Text py='2'>{address.split(" ")[3]}</Text>
                        </div>
                        <div className="flex gap-2 justify-center items-center">
                            <FaMoneyBill1Wave fontSize={'1.5rem'}/>
                            <Text py='2'>{salary}</Text>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="badge text-[#1967D2] text-lg p-4 badge-outline">{duty_variant}</div>
                        <div className="badge text-[#34A853] text-lg p-4 badge-outline">{job_action}</div>
                    </div>
                </CardBody>

                <CardFooter className='justify-end'>
                    <Buttons value={'Apply'} />
                </CardFooter>
            </Stack>
        </Card>
    )
}
