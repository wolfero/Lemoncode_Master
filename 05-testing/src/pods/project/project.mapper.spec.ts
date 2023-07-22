import { mapProjectFromApiToVm } from './project.mapper';

describe('Project mapper should', () => {
  const mockProject = {
    id: '1',
    name: 'Test Project',
    externalId: 'EXT1',
    comments: 'This is a test project',
    isActive: true,
    employees: [
      {
        id: 'E1',
        isAssigned: true,
        employeeName: 'John Doe',
      },
      {
        id: 'E2',
        isAssigned: false,
        employeeName: 'Jane Doe',
      },
    ],
  };

  it('correctly map a project from API model to view model', () => {
    const expectedProject = {
      ...mockProject,
      employees: mockProject.employees.map((employee) => ({ ...employee })),
    };

    const result = mapProjectFromApiToVm(mockProject);

    expect(result).toEqual(expectedProject);
  });

});
