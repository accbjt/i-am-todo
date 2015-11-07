require 'rails_helper'

describe TodosController do

  describe "GET #index" do
    it "renders the :index template" do
      get :index
      expect(response).to render_template("index")
    end
  end

  describe "POST #create" do
    context "with valid attributes" do
      it "saves the new todo in the database" do
        expect{
          post :create, todo: attributes_for(:todo)
        }.to change(Todo, :count).by(1)
      end

      it "renders Todo json" do
        post :create, todo: attributes_for(:todo)
        parsed_body = JSON.parse(response.body)
        expect(parsed_body['todo']).to eq "this is a new todo"
      end
    end

    context "with invalid attributes" do
      it "does not save the new contact in the database" do
        expect{
          post :create, todo: attributes_for(:invalid_todo)
        }.not_to change(Todo, :count)
      end

      it "render todo error in json" do
        post :create, todo: attributes_for(:invalid_todo)
        parsed_body = JSON.parse(response.body)
        expect(parsed_body['todo'][0]).to eq "can't be blank"
      end
    end
  end

  describe 'PATCH #update' do
    before :each do
      @todo = create(:todo)
    end

    context "with valid attributes" do
      it "updates the contact in the database" do
        patch :update, id: @todo, todo: attributes_for(:todo)
        expect(assigns(:todo)).to eq(@todo)
      end

      it "changes @todo's attributes" do
        patch :update, id: @todo,
        todo: attributes_for(:todo,
          todo: 'This is updated',
          position: 3)
        @todo.reload
        expect(@todo.todo).to eq('This is updated')
        expect(@todo.position).to eq(3)
      end

      it "render Todo json" do
        patch :update, id: @todo,
        todo: attributes_for(:todo,
          todo: 'This is updated',
          position: 3)
        parsed_body = JSON.parse(response.body)
        expect(parsed_body['todo']).to eq 'This is updated'
        expect(parsed_body['position']).to eq 3
      end
    end

    context "with invalid attributes" do
      it "does not update the contact" do
        patch :update, id: @todo,
        todo: attributes_for(:todo,
          todo: nil,
          position: nil)
        expect(@todo.todo).to eq "this is a new todo"
        expect(@todo.position).to eq 1
      end

      it "render todo error in json" do
        patch :update, id: @todo,
        todo: attributes_for(:todo,
          todo: nil,
          position: nil)
        parsed_body = JSON.parse(response.body)
        expect(parsed_body['todo'][0]).to eq "can't be blank"
        expect(parsed_body['position'][0]).to eq "can't be blank"
      end
    end
  end

end
