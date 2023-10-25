import { Bullet, Section, Header, Item, List } from "./styled";

export const Skills = ({ skills, title }) => (
    <Section>
        <Header>{title}</Header>
        <List>
            {skills.map(skill => (
                <Item key={skill}>
                    <Bullet />
                    {skill}
                </Item>
            ))}
        </List>
    </Section>
)
