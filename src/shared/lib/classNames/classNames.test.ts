import {classNames} from "./classNames";

describe('classNames', () => {
    const baseClassName = 'someClass';
    const additionalClassName = 'additionalClass';

    test('with only first param', () => {
        expect(classNames(baseClassName)).toBe(baseClassName);
    });

    test('with first and third params', () => {
        const expected = baseClassName + ' ' + additionalClassName;

        expect(classNames(baseClassName, {}, [additionalClassName])).toBe(expected);
    });

    test( 'baseClassName with mods', () => {
        const modsClasses = 'hovered scrollable';
        const expected = baseClassName + ' ' + additionalClassName + ' ' + modsClasses;

        expect(classNames(baseClassName, {hovered: true, scrollable: true}, [additionalClassName])).toBe(expected);
    });

    test( 'baseClassName with one mode', () => {
        const modsClasses = 'hovered';
        const expected = baseClassName + ' ' + additionalClassName + ' ' + modsClasses;

        expect(classNames(baseClassName, {hovered: true, scrollable: false}, [additionalClassName])).toBe(expected);
    });

    test( 'baseClassName with undefined mode', () => {
        const modsClasses = 'hovered';
        const expected = baseClassName + ' ' + additionalClassName + ' ' + modsClasses;

        expect(classNames(baseClassName, {hovered: true, scrollable: undefined}, [additionalClassName])).toBe(expected);
    });
})