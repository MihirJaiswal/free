import Link from 'next/link';
import { TextHoverEffect } from "@/components/ui/text-hover-effect"
import AnimationContainer from '../ui/Animation-container';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="flex flex-col relative items-center justify-center border-t border-border pt-16 pb-8 md:pb-0 px-6 lg:px-8 w-full  mx-auto lg:pt-32 bg-[radial-gradient(35%_128px_at_50%_0%,rgba(255,255,255,0.08),white)] dark:bg-[radial-gradient(35%_128px_at_50%_0%,rgba(255,255,255,0.08),black)]">

            <div className="absolute top-0 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-1.5 bg-foreground rounded-full"></div>

            <div className="grid gap-8 xl:grid-cols-3 xl:gap-8 w-full">

                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col items-start justify-start md:max-w-[200px]">
                        <div className="flex items-center justify-center">
                            <Image src="/logo.png" alt="DigiBazar" width={40} height={40} />
                            <h2 className="text-xl font-bold dark:text-white text-gray-700 ml-2">IGI-BAZAAR</h2>
                        </div>
                        <p className="text-muted-foreground mt-4 text-sm text-start">
                            Manage your warehouse and store with ease.
                        </p>
                        <span className="mt-4 text-gray-900 dark:text-neutral-200 text-sm flex items-center">
                            Made by <Link href="/" className="font-semibold ml-1">Mihir Jaiswal</Link>
                        </span>
                    </div>
                </AnimationContainer>

                <div className="grid-cols-2 gap-8 grid mt-16 xl:col-span-2 xl:mt-0">
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <AnimationContainer delay={0.2}>
                            <div className="">
                                <h3 className="text-base font-medium text-white">
                                    Sell in Bulk
                                </h3>
                                <ul className="mt-4 text-sm text-muted-foreground">
                                    <li className="mt-2">
                                        <Link href="/gigs" className="hover:text-foreground transition-all duration-300">
                                            Wholesale
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/gigs/gig" className="hover:text-foreground transition-all duration-300">
                                            Marketplace
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/about" className="hover:text-foreground transition-all duration-300">
                                            About
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/" className="hover:text-foreground transition-all duration-300">
                                            Home
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </AnimationContainer>
                        <AnimationContainer delay={0.3}>
                            <div className="mt-10 md:mt-0 flex flex-col">
                                <h3 className="text-base font-medium text-white">
                                    Integrations
                                </h3>
                                <ul className="mt-4 text-sm text-muted-foreground">
                                    <li className="">
                                        <Link href="https://github.com/MihirJaiswal" className="hover:text-foreground transition-all duration-300">
                                            Github
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="https://www.instagram.com/mihir_jaiswal_/" className="hover:text-foreground transition-all duration-300">
                                            Instagram
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="https://www.linkedin.com/in/mihir-jaiswal-322898287/" className="hover:text-foreground transition-all duration-300">
                                            LinkedIn
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </AnimationContainer>
                    </div>
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <AnimationContainer delay={0.4}>
                            <div className="">
                                <h3 className="text-base font-medium text-white">
                                    Community
                                </h3>
                                <ul className="mt-4 text-sm text-muted-foreground">
                                    <li className="mt-2">
                                        <Link href="community/communities/explore" className="hover:text-foreground transition-all duration-300">
                                           Explore
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/community/communities/posts" className="hover:text-foreground transition-all duration-300">
                                        Posts
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </AnimationContainer>
                        <AnimationContainer delay={0.5}>
                            <div className="mt-10 md:mt-0 flex flex-col">
                                <h3 className="text-base font-medium text-white">
                                    Company
                                </h3>
                                <ul className="mt-4 text-sm text-muted-foreground">
                                    <li className="">
                                        <Link href="/about" className="hover:text-foreground transition-all duration-300">
                                            About Us
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/privacy" className="hover:text-foreground transition-all duration-300">
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/terms" className="hover:text-foreground transition-all duration-300">
                                            Terms & Conditions
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </AnimationContainer>
                    </div>
                </div>

            </div>

            <div className="mt-8 border-t border-border/40 pt-4 md:pt-8 md:flex md:items-center  w-full flex justify-center items-center">
                <AnimationContainer delay={0.6}>
                    <p className="text-sm text-muted-foreground mt-8 md:mt-0 text-center w-full mx-auto">
                        &copy; {new Date().getFullYear()} DIGI-BAZAAR. All rights reserved.
                    </p>
                </AnimationContainer>
            </div>

            <div className="h-[20rem] lg:h-[10rem] hidden md:flex items-center justify-center w-full">
                <TextHoverEffect text="DIGI-BAZAAR" />
            </div>
        </footer>
    )
}

export default Footer