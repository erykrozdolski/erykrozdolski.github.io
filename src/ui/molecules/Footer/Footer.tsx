import { Container } from 'atoms';

export const Footer = () => {
  return (
    <Container>
      <footer className="py-4">
        <hr className=" mt-2 " />
        <div className="flex text-xs gap-2 justify-end w-full">
          <a className="underline font-bold" href="https://paniekolegoprojekt.pl">
            Panie Kolego Projekt
          </a>
          {new Date().getFullYear()}
        </div>
      </footer>
    </Container>
  );
};
