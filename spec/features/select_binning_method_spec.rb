feature 'select a binning method' do
  scenario 'select Stage Bins and correct secondary options display' do
    visit '/'

    find( '#stage-bins').click
    expect(page).to have_content('PBDB Ages')
  end
end
