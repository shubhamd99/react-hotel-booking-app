import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';

interface Service {
    icon: JSX.Element | string;
    title: string;
    info: string;
}

interface IStateServices {
    services: Service[];
}

export default class Services extends Component<{}, IStateServices> {

    public readonly state: Readonly<IStateServices> = {
        services: [
            {
                icon: <FaCocktail />,
                title: "free cocktails",
                info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            },
            {
                icon: <FaHiking />,
                title: "endless hiking",
                info: " Lorem It was popularised in the 1960s with the release of Letraset sheets containing."
            },
            {
                icon: <FaShuttleVan />,
                title: "free shuttles",
                info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            },
            {
                icon: <FaBeer />,
                title: "strongest beers",
                info: "Lorem There are many variations of passages of Lorem Ipsum available, but the majority form."
            },
        ]
    }

    public render() {
        const { services } = this.state;
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {services.map((item: Service, index: number) => {
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}
                </div>
            </section>
        )
    }
}
