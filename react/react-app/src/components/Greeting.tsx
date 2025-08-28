

type GreetingProps = {
    name: string;
};

export default function Greeting({ name }: GreetingProps) {
    return <p>Hello {name}, Welcome to React!</p>
}